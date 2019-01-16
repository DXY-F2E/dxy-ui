const http = require('http');
const url = require('url');
const browserSync = require('browser-sync');
const { exec } = require('child_process');
const { getFile } = require('./tool');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  const pUrl = url.parse(req.url, true);
  // console.log('TCL: req.url', req.url);
  // console.log('TCL: pUrl', pUrl);
  if (/\/favicon\.ico/.test(req.url)) {
    res.end();
  } else if (/^\/dxy-ui\/docs$/.test(pUrl.pathname)) {
    res.writeHead(301, {
      Location: '/docs',
    });
    res.end();
  } else {
    getFile(pUrl, res);
  }
});

// 设置监听端口
const browserSyncServ = browserSync.create();
server.listen(port - 1, hostname, () => {
  browserSyncServ.init({
    open: false,
    ui: false,
    notify: false,
    logLevel: 'silent',
    proxy: `localhost:${port - 1}`,
    files: [
      {
        match: ['./docs/src/*', './examples/**/*', './sass/**/*.scss', './sass/mixins/**/*.scss'],
        fn(e, e_path) {
          // console.log(e_path);

          // 显示变更的行为，文件路径
          if (e === 'change') {
            if (/\.(scss|css|js)$/.test(e_path)) {
              const exec_cmd = 'npm run build';
              exec(exec_cmd, (err) => {
                if (err) throw err;
                // console.log(stdout);
                console.log(`${exec_cmd} complete`);
                browserSyncServ.reload();
              });
            } else {
              browserSyncServ.reload();
            }
          }
        },
      },
    ],
    port,
  });

  console.log(`服务器运行在 http://${hostname}:${port}/docs`);
});
