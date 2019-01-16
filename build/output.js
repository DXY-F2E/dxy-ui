const fs = require('fs');
const tool = require('./tool');

const docsHtml = tool.reanderPageDocs();
fs.writeFileSync(tool.resoveRoot('docs/index.html'), docsHtml, 'utf-8');

const examplesHtml = tool.readerPageExamples();
fs.writeFileSync(tool.resoveRoot('examples/index.html'), examplesHtml, 'utf-8');
