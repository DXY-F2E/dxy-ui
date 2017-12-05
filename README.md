## DXY-UI

### 简介
DXY-UI是一套适用于桌面端的前端UI库，不包含任何JS，仅仅关注样式。囊括了文本标题，列表表格，表单按钮，栅格系统等基础样式以及十余个基础组件。

#### 兼容性
兼容各主流浏览器及IE10+。

### 快速使用
下载到本地后，在项目中使用 `<link href="">` 引入如下两个文件中任意一个即可使用。
```
./dist/css/dxy-ui.css   //未压缩版本
./dist/css/dxy-ui.min.css   //压缩版本
```
 为方便使用，建议先查看[使用文档](https://dxy-f2e.github.io/dxy-ui/docs/)。
 
### 使用文档
[快速开始吧](https://dxy-f2e.github.io/dxy-ui/docs/)
 
### 开发构建

#### 效果预览

安装依赖
```
npm install
```
执行
```
npm start
```
接下来访问 `http://127.0.0.1:3002/docs`

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

#### 前缀
DXY-UI 默认带前缀 `dxy-`，如果想去掉或修改前缀，修改 `theme/_normal.scss` 中的变量 `$prefix` 即可。

#### 二次开发
执行 `npm start` 之后直接修改 `./sass` 中的源文件，
或者更改源文件之后执行 `gulp` 进行打包。


### 参考&使用的项目
- [bootstrap](https://github.com/twbs/bootstrap)
- [iconfont](http://www.iconfont.cn/)


### 更新日志

#### v1.0.1
1. 修复本地开发问题
2. 修复弹窗样式
3. 兼容表单单选框和复选框文字换行样式

#### v1.0.2
1. 修复 loading 位置
2. 简化表单校验 dom
3. 微调部分样式