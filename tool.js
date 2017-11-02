const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const PAGE_INFO = require('./preview_data');

var tpl_item, tpl_docs;
var renderPageInfo={data:[],body:"",t:{a:1,b:2}, nav: ""};

tpl_item = getTplFn("./examples/inc/item.html");
tpl_docs = getTplFn("./docs/src/index.tpl");
// console.log('tpl_item', tpl_item);

// 递归生成侧边栏导航
function createNav(data) {
  var html = "";
  data.forEach(function(item) {
    html += '<ul class="dxy-tree-node' + (item.expanded ? ' dxy-tree-expanded' : '') + '">'
      + '<li class="dxy-tree-content"><a href="#' + (item.path ? item.path.replace(/\./g, "_") : item.name) + '">' + item.title + '</a></li>';
    if (item.data) {
      html += '<li class="dxy-tree-children">' + createNav(item.data) + '</li>';
    }
    html += '</ul>';
  });
  return html;
}

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

  } else if ( /^\/docs$/.test(url.pathname) || url === 'docs') {
    // 文档
    type = "docs";
    filePath = path.resolve(__dirname, 'docs/src/index.tpl');

  }else {
    filePath = path.resolve(__dirname, 'examples/index.html');

  }

  var data = '';
  if(/\.(png|ico|jpg|svg|gif|jpeg)$/.test(filePath)){
    let type = {
      "gif": "image/gif",
      "ico": "image/x-icon",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "png": "image/png",
      "svg": "image/svg+xml"
    };
    data = fs.readFileSync(filePath, 'binary');
    res.setHeader('Content-Type', type[RegExp.$1]);
    res.write(data,'binary');
    res.statusCode = 200;
    res.end();
    return;
  }
  console.log('return', type, filePath);

  // 找不到文件也能正常显示页面
  try {
    var stat = fs.statSync(filePath);
    if (stat && stat.isFile()) {
      data = fs.readFileSync(filePath, 'utf8');
    }
  } catch (e) {
    // res.statusCode = 404;
    // res.end('未找到文件');
    // console.log(e);
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
      // console.log("filePath",t_filePath);
      try {
        item.body = fs.readFileSync(t_filePath, 'utf8');
      } catch (e) {
        item.body = "";
        // console.log(e);
      }
    }
    renderPageInfo.map = PAGE_INFO.map;
    renderPageInfo.data = PAGE_INFO.data;
    renderPageInfo.nav = createNav(PAGE_INFO.data);
    data = tpl_docs(renderPageInfo);
  }

  if (res) {
    res.statusCode = 200;
    res.end(data);
  } else if (type === 'docs') {
    fs.writeFileSync('./docs/index.html', data, 'utf-8')
  }
}

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
    // console.log(e);
  }
}

module.exports = {
  getTplFn,
  getFile,
  createNav
};