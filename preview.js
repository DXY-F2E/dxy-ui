const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const bs = require('browser-sync').create();
const exec = require('child_process').exec;
const PAGE_INFO = require('./preview_data');
// console.log('PAGE_INFO', PAGE_INFO);
const ejs = require('ejs');

var tpl_item, tpl_docs;
var renderPageInfo={data:[],body:"",t:{a:1,b:2}, nav: ""};
function getTplFn(filePath){
  try {
    var stat = fs.statSync(filePath);
		// console.log("stat",stat, stat.isFile() )
    if ( stat && stat.isFile() ) {
      var tplStr = fs.readFileSync(filePath, 'utf8');
			tplFnName = ejs.compile(tplStr);
			// console.log('tplFnName', tplFnName);
			return tplFnName;
    }
  } catch (e) {
    console.log(e);
  }
}
tpl_item = getTplFn("./examples/inc/item.html");
tpl_docs = getTplFn("./docs/index.html");
// console.log('tpl_item', tpl_item);

const hostname = '127.0.0.1';
let port = 3002;

function getFile(url, res) {
  var filePath, type;
  if (/\..+/.test(url.pathname)) {
		// 静态资源，有后缀拓展名
		type = 'file';
    filePath = path.resolve(__dirname + url.pathname);
  } else if (/examples\/.+/.test(url.pathname)) {
		// 示例页
		type = 'example';
    filePath = path.resolve(__dirname + url.pathname + '.html');
		var urlObjPath = url.pathname.replace(/\/examples\//,"").replace(/\//g,".");
		// console.log("urlObjPath",url.pathname, urlObjPath);
		try{
			var td = PAGE_INFO.map[urlObjPath];
			// console.log("urlPathObj", td);
			if( td ){
				renderPageInfo.data = td;
			}
		}catch(e){
			
		}
		
  } else if ( /^\/docs$/.test(url.pathname) ) {
		// 文档
		type = "docs";
		filePath = path.resolve(__dirname, 'docs/index.html');
		
	}else {
    filePath = path.resolve(__dirname, 'examples/index.html');
		
  }
	
	if(/favicon/.test(filePath) ){
		return;
	}
	console.log('return', type, filePath);

	// 找不到文件也能正常显示页面
  var data = '';
  try {
    var stat = fs.statSync(filePath);
    if (stat && stat.isFile()) {
      data = fs.readFileSync(filePath, 'utf8');
    }
  } catch (e) {
    // res.statusCode = 404;
    // res.end('未找到文件');
    console.log(e);
  }

  if(type=='example' && tpl_item){
    renderPageInfo.body = data;
    // console.log("renderPageInfo",renderPageInfo);
    data = tpl_item(renderPageInfo);

  }else if(type=='docs' && tpl_docs){
    // console.log("tpl_docs",tpl_docs)
    // 所有页面的数据
    for(var itPath in PAGE_INFO.map){
      var item = PAGE_INFO.map[itPath];
      var t_filePath = path.resolve(__dirname, 'examples/'+item.path.replace(/\./g,"/")+'.html');
      console.log("filePath",t_filePath);
      try {
        item.body = fs.readFileSync(t_filePath, 'utf8');
			} catch (e) {
      	item.body = "";
      	console.log(e);
			}
    }
    renderPageInfo.map = PAGE_INFO.map;
    renderPageInfo.data = PAGE_INFO.data;
    renderPageInfo.nav = createNav(PAGE_INFO.data);
    data = tpl_docs(renderPageInfo);

  }
  res.statusCode = 200;
  res.end(data);
}

// 递归生成侧边栏导航
function createNav(data) {
  var html = "";
  data.forEach(function(item) {
    html += '<ul class="nav dxy-tree-node' + (item.expanded ? ' dxy-tree-expanded' : '') + '">'
			+ '<li class="dxy-tree-content"><a href="#' + (item.path ? item.path.replace(/\./g, "_") : item.name) + '">' + item.title + '</a></li>';
		if (item.data) {
			html += '<li class="dxy-tree-children">' + createNav(item.data) + '</li>';
		}
    html += '</ul>';
  });
  return html;
}

const server = http.createServer((req, res) => {
  var currUrl = url.parse(req.url, true);
  console.log('get', req.url);
  getFile(currUrl, res);
});

//设置监听端口
server.listen( port-1, hostname, function(){
bs.init({
	open: false,
	ui: false,
	notify: false,
	logLevel:"silent",
	proxy: 'localhost:'+ (port-1),
	files: [
		{
			match:['./docs/src/*','./examples/**/*','./sass/**/*.scss', './sass/mixins/**/*.scss'],
			fn:function(e, e_path){
				console.log(e_path);
				
				// 显示变更的行为，文件路径
				if( e=="change" ){
					if( /\.(scss|css|js)$/.test(e_path) ){
						var exec_cmd = "npm run build"
						var child = exec(exec_cmd, function(err, stdout, stderr) {
							if (err) throw err;
							// console.log(stdout);
							console.log(exec_cmd+' complete');
							bs.reload();
						});
					}else{
						bs.reload();
					}

				}else{


				}
				
			}
		}
	],
	port: port
});

console.log(`服务器运行在 http://${hostname}:${port}/examples/`);

});