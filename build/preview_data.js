/* eslint-disable no-param-reassign */
const allData = [
  {
    name: 'elements',
    title: '基本元素',
    desc: '',
    expanded: true,
    data: [
      {
        name: 'text',
        title: '文本',
        desc: '为 HTML 中不同的标题标签定制了大小，可使用 `<h1>` 到 `<h6>` 或 `.dxy-h1` 到 `.dxy-h2` 类。正文提供了不同语境的样式，可用于 `<p>` 标签或其他文字标签中。',
        body: '',
      },
      {
        name: 'list',
        title: '列表',
        desc: '和原生列表不同，基本列表是去除样式的。',
        body: '',
        data: [
          {
            name: 'horizon',
            title: '水平列表',
            desc: '所有列表项放置在一行的列表。',
            body: '',
          },
          {
            name: 'dot',
            title: '实心符号列表',
            desc: '左侧带实心圆符号的列表。',
            body: '',
          },
          {
            name: 'circle',
            title: '空心符号列表',
            desc: '左侧带空心圆圈的列表。',
            body: '',
          },
          {
            name: 'dl',
            title: '短语列表',
            desc: '为 `<dl>` 提供的样式，适用于短语后有对应定义或长句的情况。',
            body: '',
          },
          {
            name: 'dl-horizon',
            title: '水平短语列表',
            desc: '短语和定义放置在一行的列表。',
            body: '',
          },
        ],
      },
      {
        name: 'grid',
        title: '栅格系统',
        desc: '参考了 `Bootstrap`，把容器分为12栏，提供 `.dxy-col-1` 到 `.dxy-col-12` 类，数字代表占用的栏数。栅格容器使用 `.dxy-container` 类，在不同屏幕宽度时会有相应合适的最大宽度。如果要使用100%的宽度，可以使用 `.dxy-container-fluid`。',
        body: '',
        data: [
          {
            name: 'combine',
            title: '组合',
            desc: [
              '我们按尺寸划分不同的屏幕设备，提供对应的栅格栏，对照如下：',
              '`.dxy-col-*`: 无',
              '`.dxy-col-sm-*`: @media (min-width: 576px)',
              '`.dxy-col-md-*`: @media (min-width: 768px)',
              '`.dxy-col-lg-*`: @media (min-width: 992px)',
              '以上可组合使用，以适配不同大小的屏幕设备。'].join('<br>'),
            body: '',
          },
          {
            name: 'fill',
            title: '填充',
            desc: '可使用 `.dxy-col` 来填充一行（`.dxy-row`）中剩余的空间。',
            body: '',
          },
          {
            name: 'offset',
            title: '列偏移',
            desc: '使用 `.dxy-offset-*`、`.dxy-offset-sm-*`、`.dxy-offset-md-*`、`.dxy-offset-lg-*` 类可以将列向右侧偏移 n 列。',
            body: '',
          },
        ],
      },
      {
        name: 'button',
        title: '按钮',
        desc: '提供按钮样式，可用在 `<button>`、`<input>` 和 `<a>` 标签。',
        body: '',
        data: [
          {
            name: 'size',
            title: '多个尺寸',
            desc: '提供其他尺寸的按钮样式，使用 `lg`、`sm` 和 `xs` 区分。',
            body: '',
          },
          {
            name: 'situation',
            title: '情景色',
            desc: '提供在不同情景下的按钮样式。',
            body: '',
          },
          {
            name: 'link',
            title: '链接/文字',
            desc: '当按钮是链接或文字时可用无边框和文字颜色突出的按钮。如果不想使用按钮的形态，去掉 `.dxy-btn` 类即可，只使用 `.dxy-btn-link`。',
            body: '',
          },
          {
            name: 'disabled',
            title: '禁用状态',
            desc: '提供按钮或链接禁用的样式，支持 `.disabled` 或 `disabled` 属性。',
            body: '',
          },
        ],
      },
      {
        name: 'table',
        title: '表格',
        desc: '基本表格是横线边框的样式。',
        body: '',
        data: [
          {
            name: 'hover',
            title: '鼠标悬停',
            desc: '鼠标悬停时，表格的行会出现背景色。',
            body: '',
          },
          {
            name: 'striped',
            title: '条纹状',
            desc: '间隔行有背景色，让每一行更有区分度。',
            body: '',
          },
          {
            name: 'bordered',
            title: '全边框',
            desc: '每个单元格都有边框的表格样式。',
            body: '',
          },
          {
            name: 'no-border',
            title: '无边框',
            desc: '另外提供了无边框的表格，可用在某些布局场景。',
            body: '',
          },
        ],
      },
      {
        name: 'form',
        title: '表单',
        desc: '给表单添加 `.dxy-form` 类，每一个表单项使用 `.dxy-form-group` 类，这样可以使每个表单项独占一行。',
        body: '',
        data: [
          {
            name: 'inline',
            title: '行内表单',
            desc: '给表单添加 `.dxy-form-inline` 类，使用 `.dxy-form-group` 类的表单项会变成 `inline-block`。',
            body: '',
          },
          {
            name: 'label',
            title: 'label',
            desc: '提供了行内标签和单行标签两种形式。',
            body: '',
          },
          {
            name: 'input',
            title: '输入框',
            desc: '输入框有固定宽度和100%宽度两种样式，两者都有 `readonly` 和 `disabled` 状态。',
            body: '',
          },
          {
            name: 'textarea',
            title: '文本框',
            desc: '文本框和输入框类似，有两种宽度和 `readonly` 和 `disabled` 两种状态，用于多行文本输入，竖直方向可拉伸。',
            body: '',
          },
          {
            name: 'radio',
            title: '单选框',
            desc: '美化了原生的单选框，提供行内和单行两种样式。',
            body: '',
          },
          {
            name: 'checkbox',
            title: '复选框',
            desc: '美化了原生的复选框，提供行内和单行两种样式。',
            body: '',
          },
          {
            name: 'select',
            title: '下拉框',
            desc: '美化了原生的 `select`，包括有 `multiple` 属性的多选 `select`。提供了自适应宽度和100%宽度。',
            body: '',
          },
          {
            name: 'validate',
            title: '表单校验',
            desc: '提供表单校验错误的样式，结合 `.dxy-validate-error` 和提示文本 `.dxy-help-inline` 或 `.dxy-help-block` 使用。',
            body: '',
          },
        ],
      },
    ],
  },
  {
    name: 'extra',
    title: '辅助和修饰',
    desc: '',
    expanded: true,
    data: [
      {
        name: 'font',
        title: '文本修饰',
        desc: '',
        body: '',
      },
      {
        name: 'situation',
        title: '情景色',
        desc: '',
        body: '',
      },
      {
        name: 'appearance',
        title: '外观',
        desc: '',
        body: '',
        data: [
          {
            name: 'border',
            title: '边框',
            desc: '',
            body: '',
          },
          {
            name: 'border-radius',
            title: '圆角',
            desc: '',
            body: '',
          },
          {
            name: 'margin',
            title: '外边距 margin',
            desc: '提供了4组值的 `margin` 值，分别是10px、15px、20px、30px，包括`top`、`right`、`bottom`和`left`4个方向，使用 `dxy-mg10`、`dxy-mg10-top` 等类名，详见下例。',
            body: '',
          },
          {
            name: 'padding',
            title: '内边距 padding',
            desc: '提供了4组值的 `padding` 值，分别是10px、15px、20px、30px，包括`top`、`right`、`bottom`和`left`4个方向，使用 `dxy-pd10`、`dxy-pd10-top` 等类名，详见下例。',
            body: '',
          },
        ],
      },
      {
        name: 'float',
        title: '浮动',
        desc: '提供左浮动和右浮动，分别使用 `.dxy-float-left`、`.dxy-float-right`，在容器中使用 `.dxy-float-left` 类可以清除浮动。',
        body: '',
      },
    ],
  },
  {
    name: 'components',
    title: '组件',
    desc: '',
    expanded: true,
    data: [
      {
        name: 'button-group',
        title: '按钮组',
        desc: '将按钮组合在同个容器内，自定义各个按钮的状态与功能。',
        body: '',
        data: [
          {
            name: 'more',
            title: '多个按钮',
            desc: '假设你需要，可以更改按钮数量。',
            body: '',
          },
          {
            name: 'vertical',
            title: '竖直方向',
            desc: '按钮数量，按钮状态一样可以自定义。',
            body: '',
          },
        ],
      },
      {
        name: 'input-group',
        title: '输入框组',
        desc: '对文本输入框进行扩展，添加所需要的文本标签或按钮。',
        body: '',
        data: [
          {
            name: 'button',
            title: '与按钮组合',
            desc: '按钮可以是 `<button>`、`<a>` 或 `<input>` 标签。',
            body: '',
          },
          {
            name: 'button-label',
            title: '多项组合',
            desc: '',
            body: '',
          },
        ],
      },
      {
        name: 'search-select',
        title: '下拉选择框',
        desc: '具有搜索功能的下拉选择框，需结合 `JavaScript` 实现。',
        body: '',
        data: [
          {
            name: 'multiple',
            title: '多选',
            desc: '提供多选功能，已选中项以标签显示在搜索框上。',
            body: '',
          },
        ],
      },
      {
        name: 'label',
        title: '标签',
        desc: '提供多种颜色。',
        body: '',
        data: [
          {
            name: 'close',
            title: '可删除',
            desc: '带删除按钮的标签。',
            body: '',
          },
          {
            name: 'badge',
            title: '徽章',
            desc: '使用醒目的颜色，可用于展示未读消息等。',
            body: '',
          },
        ],
      },
      {
        name: 'popover',
        title: '气泡提示',
        desc: '用于标记提示，提供四个方向可选择。',
        body: '',
        data: [
          {
            name: 'custom',
            title: '内嵌 HTML',
            desc: '可以自定义内容，分为标题和主体内容。',
            body: '',
          },
        ],
      },
      {
        name: 'alert',
        title: '警告框',
        desc: '一般用于代替浏览器原生的 `alert`，提供四种色值在不同场景使用。',
        body: '',
        data: [
          {
            name: 'close',
            title: '可关闭',
            desc: '',
            body: '',
          },
          {
            name: 'icon',
            title: '带图标',
            desc: '',
            body: '',
          },
          {
            name: 'icon-close',
            title: '带图标和关闭',
            desc: '',
            body: '',
          },
        ],
      },
      {
        name: 'confirm',
        title: '确认框',
        desc: '一般用于代替浏览器原生的 `confirm`，可添加标题与主体文案。可使用 `.dxy-mask` 添加背景遮罩层。',
        body: '',
      },
      {
        name: 'modal',
        title: '模态框',
        desc: '显示一块单独的内容，自定义标题与主体内容，主体内容可以是表单，表格等。可使用 `.dxy-mask` 添加背景遮罩层。',
        body: '',
      },
      {
        name: 'navigation',
        title: '导航栏',
        desc: '基本导航栏样式较简单，所有项在一行。提供了多种形式的导航栏，还有面包屑和下拉菜单。',
        body: '',
        data: [
          {
            name: 'tab',
            title: '标签式',
            desc: '',
            body: '',
          },
          {
            name: 'pill',
            title: '胶囊式',
            desc: '',
            body: '',
          },
          {
            name: 'pill-vertical',
            title: '垂直胶囊式',
            desc: '',
            body: '',
          },
          {
            name: 'crumb',
            title: '面包屑',
            desc: '',
            body: '',
          },
          {
            name: 'menu',
            title: '下拉菜单',
            desc: '',
            body: '',
          },
        ],
      },
      {
        name: 'pagination',
        title: '分页',
        desc: '提供带页码的翻页样式，需结合 `JavaScript` 实现功能。',
        body: '',
        data: [
          {
            name: 'no-number',
            title: '无页码',
            desc: '仅提供翻页按钮。',
            body: '',
          },
          {
            name: 'jump',
            title: '跳转',
            desc: '可自定义页码进行跳转。',
            body: '',
          },
        ],
      },
      {
        name: 'go-top',
        title: '回到顶部',
        desc: '点击后返回顶部或指定位置的按钮，提供多个样式。',
        body: '',
        data: [
          {
            name: 'other',
            title: '其它颜色/形状',
            desc: '',
            body: '',
          },
        ],
      },
      {
        name: 'loading',
        title: '加载',
        desc: '等待数据加载时的动画效果。',
        body: '',
        data: [
          {
            name: 'text',
            title: '带文字',
            desc: '可添加自定义文字提示。',
            body: '',
          },
        ],
      },
      {
        name: 'progress',
        title: '进度条',
        desc: '为当前动作提供清晰的进度反馈。',
        body: '',
        data: [
          {
            name: 'thin',
            title: '更细的线条',
            desc: '',
            body: '',
          },
        ],
      },
      {
        name: 'step-bar',
        title: '步骤条',
        desc: '用于步骤进度提示，或流程展示。',
        body: '',
        data: [
          {
            name: 'full',
            title: '宽度撑满',
            desc: '步骤条两端撑满整个容器。',
            body: '',
          },
          {
            name: 'vertical',
            title: '竖直方向',
            desc: '当步骤较多时，为了更好的观感可以使用竖直方向的步骤条。',
            body: '',
          },
        ],
      },
      {
        name: 'tree',
        title: '选项树',
        desc: '多层级的选项卡，自定义层级及内容。',
        body: '',
        data: [
          {
            name: 'text',
            title: '文字展示',
            desc: '仅以文字展示关系的多级树。',
            body: '',
          },
        ],
      },
    ],
  },
];

const dataMap = {};
// 递归生成路径，第一层是没有对应文件的，所以不生成 path
function createPath(data, lastName) {
  data.forEach((item) => {
    if (lastName) {
      item.path = `${lastName}.${item.name}`;
      dataMap[item.path] = item;
    }
    item.desc = item.desc.replace(/`(.+?)`/g, word => `<code>${word.replace(/`/g, '').replace(/<|>/g, (word2) => {
      if (word2 === '<') {
        return '&lt;';
      }
      return '&gt;';
    })}</code>`);
    if (item.data) {
      createPath(item.data, (lastName ? `${lastName}.` : '') + item.name);
    }
  });
}
createPath(allData);

// allData.forEach(function (sort, i) {
//   for(let index in sort.data){
//     var it = sort.data[index];
//     it.path = sort.name+"."+it.name;
//     dataMap[it.path] = it;
//   }
// });

module.exports = {
  data: allData,
  map: dataMap,
};
