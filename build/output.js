const fs = require('fs');
const tool = require('./tool');
const { minify } = require('html-minifier');

const minifyFn = html => minify(html, {
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
});

const docsHtml = minifyFn(tool.reanderPageDocs());
fs.writeFileSync(tool.resoveRoot('docs/index.html'), docsHtml, 'utf-8');

const examplesHtml = minifyFn(tool.readerPageExamples());
fs.writeFileSync(tool.resoveRoot('examples/index.html'), examplesHtml, 'utf-8');
