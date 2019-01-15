const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const previewData = require('./preview_data');

var renderPageInfo = {
  data: [],
  body: "",
  t: {
    a: 1,
    b: 2
  },
  nav: ""
};

function resoveRoot(pathname) {
  pathname = pathname.replace(/^\/+/, '')
  return path.resolve(__dirname, '../', pathname)
}

function getTplFn(filePath) {
  try {
    var stat = fs.statSync(filePath);
    // console.log("stat",stat, stat.isFile() )
    if (stat && stat.isFile()) {
      var tplStr = fs.readFileSync(filePath, 'utf8');
      // // // console.log('TCL: getTplFn -> tplStr', tplStr);
      tplFnName = ejs.compile(tplStr);
      return tplFnName;
    }
  } catch (e) {
    // console.log(e);
  }
}

function reanderPageDocs(){
  // 实时模板渲染
  filePath = resoveRoot('docs/src/index.tpl');
  // if (!checkFilePath(filePath)) return
  // // console.log('TCL: getFile -> filePath', filePath);
  let resData
  let tpl_docs = getTplFn(filePath);
  if (tpl_docs) {
    // 页面中所有块的数据
    for (var itPath in previewData.map) {
      var item = previewData.map[itPath];
      var t_filePath = resoveRoot('examples/' + item.path.replace(/\./g, "/") + '.html');
      // console.log("filePath",t_filePath);
      try {
        item.body = fs.readFileSync(t_filePath, 'utf8');
      } catch (e) {
        item.body = "";
        // console.log(e);
      }
    }
    renderPageInfo.map = previewData.map;
    renderPageInfo.data = previewData.data;
    renderPageInfo.nav = createNav(previewData.data);
    resData = tpl_docs(renderPageInfo);
    // // console.log('TCL: getFile -> resData', resData);
  }
  return resData
}

function readerPageExamples({pathname}={pathname:'/examples'}){
  let resData
  let urlR = pathname.replace(/^\/examples/, "");

  if(['','/'].includes(urlR)){
    // 首页
    resData = fs.readFileSync(resoveRoot('examples/index.html'), 'utf8');
  }else{
    // 子模块
    let urlObjPath = urlR.slice(1).replace(/\//g, ".");
    // console.log('TCL: readerPageExamples -> urlObjPath', urlObjPath);
    try {
      renderPageInfo.body = fs.readFileSync(resoveRoot(pathname.slice(1)+'.html'), 'utf8');
      var td = previewData.map[urlObjPath];
      // console.log('TCL: readerPageExamples -> td', td);
      if (td) {
        renderPageInfo.data = td;
      }
    } catch (e) {
  
    }
    let tpl_item = getTplFn(resoveRoot("examples/inc/item.tpl"));
    if (tpl_item) {
      // renderPageInfo.body = resData;
      // console.log('TCL: readerPageExamples -> renderPageInfo', renderPageInfo);
      resData = tpl_item(renderPageInfo);
    }
  }
  return resData
}

// 递归生成侧边栏导航
function createNav(data) {
  var html = "";
  data.forEach(function (item) {
    html += '<ul class="dxy-tree-node' + (item.expanded ? ' dxy-tree-expanded' : '') + '">' +
      '<li class="dxy-tree-content"><a href="#' + (item.path ? item.path.replace(/\./g, "_") : item.name) + '">' + item.title + '</a></li>';
    if (item.data) {
      html += '<li class="dxy-tree-children">' + createNav(item.data) + '</li>';
    }
    html += '</ul>';
  });
  return html;
}

function getFile(url, res) {
  // console.log('TCL: getFile -> url', url.pathname);
  var filePath, type, resData;

  const getFileData = (fpath) => {
    let rlt = ''
    // 找不到文件也能正常显示页面
    try {
      var stat = fs.statSync(fpath);
      if (stat && stat.isFile()) {
        rlt = fs.readFileSync(fpath, 'utf8');
      }
    } catch (e) {
      // res.statusCode = 404;
      // res.end('未找到文件');
      // console.log(e);
    }
    return rlt
  }

  if (/\..+/.test(url.pathname)) {
    // // console.log('TCL: getFile -> __dirname + url.pathname', __dirname , url.pathname);
    // 静态资源，有后缀拓展名
    type = 'file';
    filePath = resoveRoot(url.pathname);
    // // console.log('TCL: getFile -> filePath', filePath);
    // if (!checkFilePath(filePath)) return
    // 图片资源
    if (/\.(png|ico|jpg|svg|gif|jpeg)$/.test(filePath)) {
      let type = {
        "gif": "image/gif",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "png": "image/png",
        "svg": "image/svg+xml"
      };
      try {
        resData = fs.readFileSync(filePath, 'binary');
        res.setHeader('Content-Type', type[RegExp.$1]);
        res.write(resData, 'binary');
        res.statusCode = 200;
        res.end();
      } catch (err) {

      }

      return;
    } else {
      resData = getFileData(filePath)
    }
  } else if (/^\/examples/.test(url.pathname)) {
    // 示例页，用于开发具体的模块
    resData = readerPageExamples(url)

  } else if (/^\/docs\/?$/.test(url.pathname)) {
    // 文档
    resData = reanderPageDocs()
    
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
  readerPageExamples
};