/**
 * Created by liww on 17/6/20.
 */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  var currUrl = url.parse(req.url, true);
  console.log('get', req.url);
  getFile(currUrl, res);
});

function getFile(url, res) {
  var filePath;
  if (/\..+/.test(url.pathname)) {
    filePath = path.resolve(__dirname + url.pathname);
  } else if (/examples\/.+/.test(url.pathname)) {
    filePath = path.resolve(__dirname + url.pathname + '.html');
  } else {
    filePath = path.resolve(__dirname, 'examples/index.html');
  }
  console.log('return', filePath);
  try {
    var stat = fs.statSync(filePath);
    if (stat && stat.isFile()) {
      var data = fs.readFileSync(filePath, 'utf8');
      res.statusCode = 200;
      res.end(data);
    }
  } catch (e) {
    res.statusCode = 404;
    res.end('未找到文件');
    console.log(e);
  }
}

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/examples/`);
});