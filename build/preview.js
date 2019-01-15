const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const bs = require('browser-sync').create();
const exec = require('child_process').exec;
const tool = require('./tool');
const getFile = tool.getFile;

const hostname = '127.0.0.1';
let port = 3002;

const server = http.createServer((req, res) => {
  var pUrl = url.parse(req.url, true);
  console.log('TCL: req.url', req.url);
	// console.log('TCL: pUrl', pUrl);
	if (req.pathname === '/favicon.ico') {
    res.end()
	}else if(/^\/dxy-ui\/docs$/.test(pUrl.pathname)){
		res.writeHead(301, {
      'Location': '/docs'
    });
    res.end();
	}else{
		getFile(pUrl, res);
	}
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
				// console.log(e_path);
				
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

console.log(`服务器运行在 http://${hostname}:${port}/docs`);

});