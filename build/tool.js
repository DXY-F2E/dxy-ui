/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const previewData = require('./preview_data');

const renderPageInfo = {
  data: [],
  body: '',
  t: {
    a: 1,
    b: 2,
  },
  nav: '',
};

function resoveRoot(pathname) {
  const tname = pathname.replace(/^\/+/, '');
  return path.resolve(__dirname, '../', tname);
}

function getTplFn(filePath) {
  let rlt;
  try {
    const stat = fs.statSync(filePath);
    // console.log("stat",stat, stat.isFile() )
    if (stat && stat.isFile()) {
      const tplStr = fs.readFileSync(filePath, 'utf8');
      // // // console.log('TCL: getTplFn -> tplStr', tplStr);
      rlt = ejs.compile(tplStr);
    }
  } catch (e) {
    // console.log(e);
  }
  return rlt;
}

// 递归生成侧边栏导航
function createNav(data) {
  let html = '';
  data.forEach((item) => {
    html += `<ul class="dxy-tree-node${item.expanded ? ' dxy-tree-expanded' : ''}">`
      + `<li class="dxy-tree-content"><a href="#${item.path ? item.path.replace(/\./g, '_') : item.name}">${item.title}</a></li>`;
    if (item.data) {
      html += `<li class="dxy-tree-children">${createNav(item.data)}</li>`;
    }
    html += '</ul>';
  });
  return html;
}

function reanderPageDocs() {
  // 实时模板渲染
  const filePath = resoveRoot('docs/src/index.tpl');
  // if (!checkFilePath(filePath)) return
  // // console.log('TCL: getFile -> filePath', filePath);
  let resData;
  const tpl_fn = getTplFn(filePath);
  if (tpl_fn) {
    // 页面中所有块的数据
    for (const itPath in previewData.map) {
      const item = previewData.map[itPath];
      if (item && {}.hasOwnProperty.call(item, 'path')) {
        const t_filePath = resoveRoot(`examples/${item.path.replace(/\./g, '/')}.html`);
        try {
          item.body = fs.readFileSync(t_filePath, 'utf8');
        } catch (e) {
          item.body = '';
          // console.log(e);
        }
      } else {
        item.body = '';
      }
    }
    renderPageInfo.map = previewData.map;
    renderPageInfo.data = previewData.data;
    renderPageInfo.nav = createNav(previewData.data);
    resData = tpl_fn(renderPageInfo);
    // // console.log('TCL: getFile -> resData', resData);
  }
  return resData;
}

function readerPageExamples({ pathname } = { pathname: '/examples' }) {
  let resData;
  const urlR = pathname.replace(/^\/examples/, '');

  if (['', '/'].includes(urlR)) {
    // 首页
    const filePath = resoveRoot('examples/inc/index.tpl');
    const tpl_fn = getTplFn(filePath);
    resData = tpl_fn({ data: previewData.data });
  } else {
    // 子模块
    const urlObjPath = urlR.slice(1).replace(/\//g, '.');
    // console.log('TCL: readerPageExamples -> urlObjPath', urlObjPath);
    renderPageInfo.body = fs.readFileSync(resoveRoot(`${pathname.slice(1)}.html`), 'utf8');
    const td = previewData.map[urlObjPath];
    // console.log('TCL: readerPageExamples -> td', td);
    if (td) {
      renderPageInfo.data = td;
    }
    const tpl_item = getTplFn(resoveRoot('examples/inc/item.tpl'));
    if (tpl_item) {
      // renderPageInfo.body = resData;
      // console.log('TCL: readerPageExamples -> renderPageInfo', renderPageInfo);
      resData = tpl_item(renderPageInfo);
    }
  }
  return resData;
}


function getFile(url, res) {
  // console.log('TCL: getFile -> url', url.pathname);
  let filePath;
  let resData;

  const getFileData = (fpath) => {
    let rlt = '';
    // 找不到文件也能正常显示页面
    try {
      const stat = fs.statSync(fpath);
      if (stat && stat.isFile()) {
        rlt = fs.readFileSync(fpath, 'utf8');
      }
    } catch (e) {
      // res.statusCode = 404;
      // res.end('未找到文件');
      // console.log(e);
    }
    return rlt;
  };

  if (/\..+/.test(url.pathname)) {
    // // console.log('TCL: getFile -> __dirname + url.pathname', __dirname , url.pathname);
    // 静态资源，有后缀拓展名
    filePath = resoveRoot(url.pathname);
    // // console.log('TCL: getFile -> filePath', filePath);
    // if (!checkFilePath(filePath)) return
    // 图片资源
    if (/\.(png|ico|jpg|svg|gif|jpeg)$/.test(filePath)) {
      const contentTypeMap = {
        gif: 'image/gif',
        ico: 'image/x-icon',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
      };

      resData = fs.readFileSync(filePath, 'binary');
      res.setHeader('Content-Type', contentTypeMap[RegExp.$1]);
      res.write(resData, 'binary');
      res.statusCode = 200;
      res.end();

      return;
    }
    resData = getFileData(filePath);
  } else if (/^\/examples/.test(url.pathname)) {
    // 示例页，用于开发具体的模块
    resData = readerPageExamples(url);
  } else if (/^\/docs\/?$/.test(url.pathname)) {
    // 文档
    resData = reanderPageDocs();
  } else {
    // filePath = resoveRoot('examples/index.html');
    // if (!checkFilePath(filePath)) return
  }

  if (resData) {
    res.statusCode = 200;
    res.end(resData);
  }
}

module.exports = {
  resoveRoot,
  getTplFn,
  getFile,
  createNav,
  reanderPageDocs,
  readerPageExamples,
};
