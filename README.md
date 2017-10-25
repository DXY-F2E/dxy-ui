## DXY-UI

### 简介
DXY-UI提供了一套适用于桌面端的前端UI库，不包含任何JS，仅仅关注样式。囊括了文本标题，列表表格，表单按钮，栅格系统等基础样式以及十余个基础组件。

#### 兼容性
兼容各主流浏览器及IE9+。

### 快速使用
克隆项目到本地后，引入如下两个文件中任意一个即可使用。
```
./dist/css/dxy-ui.css   //未压缩版本
./dist/css/dxy-ui.min.css   //压缩版本
```
 为方便使用，建议先查看使用文档。   
### 开发构建

#### 效果预览

安装依赖
```
npm install
```
然后执行
```
npm start
```
接下来访问 `http://127.0.0.1:3002/examples/`

#### 目录结构

    ├── dist 打包结果
    ├── docs 使用文档项目
    |    ├── dist 使用文档打包结果
    |    ├-- src 使用文档源文件
    |    └── index.html 文档首页
    ├── examples 用法示例
    ├── sass 样式
    |    ├── elements 基本样式
    |    ├-- components 组件
    |    ├-- extra 修饰、功能等样式
    |    ├-- mixins
    |    ├-- theme 主题
    |    ├-- dxy-ui.scss
    |    └── reset.scss
    ├── index.js 文档服务器
    ├── preview.js 示例服务器
    ├── preview_data.js 示例数据
    ├── nodemon.json
    ├── package.json
    ├── package-lock.json
    ├── gulpfile.js
    └── README.md

#### 二次开发
执行`npm start`之后直接修改`./sass`中的源文件，
或者更改源文件之后执行`gulp`进行打包。

### 参考&使用的项目
- [bootstrap](https://github.com/twbs/bootstrap)
- [iconfont](http://www.iconfont.cn/)