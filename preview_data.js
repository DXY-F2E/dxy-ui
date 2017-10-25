const allData = [
  {
    "name": "elements",
    "title":"基本元素",
		"desc": "",
    "expanded": true,
    "data":[
      {
        "name": "text",
        "title": "文本",
        "desc": "为 HTML 中不同的标题标签定制了大小，可使用 `<h1>` 到 `<h6>` 或 `.dxy-h1` 到 `.dxy-h2` 类。正文提供了不同语境的样式，可用于 `<p>` 标签或其他文字标签中。",
        "body": ""
      },
      {
        "name": "list",
        "title": "列表",
        "desc": "和原生列表不同，基本列表是去除样式的。",
        "body": "",
				"data": [
					{
						"name": "horizon",
						"title": "水平列表",
						"desc": "所有列表项放置在一行的列表。",
						"body": ""
					},
          {
            "name": "dot",
            "title": "实心符号列表",
            "desc": "左侧带实心圆符号的列表。",
            "body": ""
          },
          {
            "name": "circle",
            "title": "空心符号列表",
            "desc": "左侧带空心圆圈的列表。",
            "body": ""
          },
          {
            "name": "dl",
            "title": "短语列表",
            "desc": "为 `<dl>` 提供的样式，适用于短语后有对应定义或长句的情况。",
            "body": ""
          },
          {
            "name": "dl-horizon",
            "title": "水平短语列表",
            "desc": "短语和定义放置在一行的列表。",
            "body": ""
          }
				]
      },
      {
        "name": "grid",
        "title": "栅格系统",
        "desc": "",
        "body": ""
      },
      {
        "name":"button",
        "title":"按钮",
        "desc":"提供按钮样式，可用在 `<button>`、`<input>` 和 `<a>` 标签。",
        "body":"",
				"data": [
					{
						"name": "size",
						"title": "多个尺寸",
						"desc": "提供其他尺寸的按钮样式，使用 `lg`、`sm` 和 `xs` 区分。",
						"body": ""
					},
					{
						"name": "situation",
						"title": "情景色",
						"desc": "提供在不同情景下的按钮样式。",
						"body": ""
					},
          {
            "name": "link",
            "title": "链接/文字",
            "desc": "当按钮是链接或文字时可用无边框和文字颜色突出的按钮。",
            "body": ""
          },
          {
            "name": "disabled",
            "title": "禁用状态",
            "desc": "提供按钮或链接禁用的样式。",
            "body": ""
          }
				]
      },
      {
        "name": "table",
        "title": "表格",
        "desc": "",
        "body": "",
        "data": [
          {
            "name": "hover",
            "title": "鼠标悬停",
            "desc": "",
            "body": ""
          },
          {
            "name": "striped",
            "title": "条纹状",
            "desc": "",
            "body": ""
          },
          {
            "name": "bordered",
            "title": "全边框",
            "desc": "",
            "body": ""
          },
          {
            "name": "no-border",
            "title": "无边框",
            "desc": "",
            "body": ""
          }
        ]
      },
      {
        "name": "form",
        "title": "表单",
        "desc": "",
        "body": "",
        "data": [
          {
            "name": "inline",
            "title": "行内表单",
            "desc": "",
            "body": ""
          },
          {
            "name": "label",
            "title": "label",
            "desc": "",
            "body": ""
          },
          {
            "name": "input",
            "title": "输入框",
            "desc": "",
            "body": ""
          },
          {
            "name": "textarea",
            "title": "文本框",
            "desc": "",
            "body": ""
          },
          {
            "name": "radio",
            "title": "单选框",
            "desc": "",
            "body": ""
          },
          {
            "name": "checkbox",
            "title": "复选框",
            "desc": "",
            "body": ""
          },
          {
            "name": "select",
            "title": "下拉框",
            "desc": "",
            "body": ""
          },
          {
            "name": "validate",
            "title": "表单校验",
            "desc": "",
            "body": ""
          },
        ]
      }
    ]
  },
	{
		"name": "components",
		"title":"组件",
    "desc": "",
		"expanded": true,
		"data":[
			{
				"name":"button-group",
				"title":"按钮组",
				"desc":"将按钮组合在同个容器内，自定义各个按钮的状态与功能。",
				"body":"",
				"data": [
					{
						"name":"more",
						"title":"三个及以上按钮",
						"desc":"可以更改按钮数量，假设你需要的话。",
						"body":""
					},
					{
						"name":"vertical",
						"title":"竖直方向",
						"desc":"按钮数量，按钮状态一样可以自定义。",
						"body":""
					}
				]
			},
			{
				"name":"input-group",
				"title":"输入框组",
				"desc":"对文本输入框进行扩展，添加所需要的文本标签或按钮。",
				"body":"",
				"data":[
					{
						"name":"button",
						"title":"与按钮组合",
						"desc":"",
						"body":""
					},
					{
						"name":"button-label",
						"title":"多项组合",
						"desc":"",
						"body":""
					}
				]
			},
			{
				"name":"search-select",
				"title":"下拉选择框",
				"desc":"具有搜索功能的下拉选择框，需结合`JavaScript`实现。",
				"body":"",
				"data":[
					{
						"name":"multiple",
						"title":"多选",
						"desc":"提供多选功能，已标签形式展现选择结果。",
						"body":""
					}
				]
			},
			{
				"name":"label",
				"title":"标签",
				"desc":"用于标记或选择，色值仅仅表示颜色，不表达具体含义。",
				"body":"",
				"data":[
					{
						"name":"close",
						"title":"可删除",
						"desc":"提供删除按钮。",
						"body":""
					},
					{
						"name":"badge",
						"title":"徽章",
						"desc":"用于展示未读消息等等。",
						"body":""
					}
				]
			},
			{
				"name":"popover",
				"title":"气泡提示",
				"desc":"用于标记提示，提供四个方向可选择。",
				"body":"",
				"data":[
					{
						"name":"custom",
						"title":"内容丰富",
						"desc":"可以自定义内容，分为标题和主体内容。",
						"body":""
					}
				]
			},
			{
				"name":"alert",
				"title":"警告框",
				"desc":"一般用于代替浏览器原生的`alert`，统一形式，提供四种色值来代表不同意义。",
				"body":"",
				"data":[
					{
						"name":"close",
						"title":"可关闭",
						"desc":"",
						"body":"",
					},
					{
						"name":"icon",
						"title":"带图标",
						"desc":"",
						"body":"",
					},
					{
						"name":"icon-close",
						"title":"带图标，可关闭",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"confirm",
				"title":"弹出确认框",
				"desc":"一般用于代替浏览器原生的`confirm`，统一形式，可添加标题与主体文案。",
				"body":"",
			},
			{
				"name":"modal",
				"title":"模态框",
				"desc":"显示一块单独的内容，自定义标题与主体内容。",
				"body":"",
			},
			{
				"name":"navigation",
				"title":"导航栏",
				"desc":"",
				"body":"",
				"data":[
					{
						"name":"tab",
						"title":"标签式",
						"desc":"",
						"body":"",
					},
					{
						"name":"pill",
						"title":"胶囊式",
						"desc":"",
						"body":"",
					},
					{
						"name":"pill-vertical",
						"title":"垂直胶囊式",
						"desc":"",
						"body":"",
					},
					{
						"name":"crumb",
						"title":"面包屑",
						"desc":"",
						"body":"",
					},
					{
						"name":"menu",
						"title":"下拉菜单",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"pagination",
				"title":"分页",
				"desc":"提供翻页样式，需结合`JavaScript`实现功能。",
				"body":"",
				"data":[
					{
						"name":"no-number",
						"title":"无页码",
						"desc":"仅提供翻页按钮。",
						"body":"",
					},
					{
						"name":"jump",
						"title":"跳转",
						"desc":"可自定义页码进行跳转。",
						"body":"",
					}
				]
			},
			{
				"name":"go-top",
				"title":"回到顶部",
				"desc":"一般放置于屏幕下方，供点击返回顶部或指定位置，提供多个图标。",
				"body":"",
				"data":[
					{
						"name":"other",
						"title":"其它颜色/形状",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"loading",
				"title":"加载",
				"desc":"等待数据加载时的动画效果。",
				"body":"",
				"data":[
					{
						"name":"text",
						"title":"带文字",
						"desc":"可添加自定义文字提示。",
						"body":"",
					}
				]
			},
			{
				"name":"progress",
				"title":"进度条",
				"desc":"为当前工作流或者动作提供清晰的进度反馈。",
				"body":"",
				"data":[
					{
						"name":"thin",
						"title":"更细的线条",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"step-bar",
				"title":"步骤条",
				"desc":"用于用户注册，信息填写等等步骤清晰的动作的流程展示。",
				"body":"",
				"data":[
					{
						"name":"full",
						"title":"宽度撑满",
						"desc":"",
						"body":"",
					},
					{
						"name":"vertical",
						"title":"竖直方向",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"tree",
				"title":"选项树",
				"desc":"多层级的选项卡，自定义层级及内容。",
				"body":"",
				"data":[
					{
						"name":"text",
						"title":"文字展示",
						"desc":"",
						"body":"",
					}
				]
			},
		]
	},
	{
		"name": "extra",
		"title":"辅助和修饰",
    "desc": "",
    "expanded": true,
		"data":[
      {
        "name": "font",
        "title": "文本修饰",
        "desc": "",
        "body": ""
      },
      {
        "name": "situation",
        "title": "情景色",
        "desc": "",
        "body": ""
      },
			{
				"name":"appearance",
				"title":"外观",
				"desc":"",
				"body":"",
        "data": [
          {
            "name": "border",
            "title": "边框",
            "desc": "",
            "body": ""
          },
          {
            "name": "border-radius",
            "title": "圆角",
            "desc": "",
            "body": ""
          },
          {
            "name": "margin",
            "title": "外边距 margin",
            "desc": "",
            "body": ""
          },
          {
            "name": "padding",
            "title": "内边距 padding",
            "desc": "",
            "body": ""
          }
        ]
			},
      {
        "name": "float",
        "title": "浮动",
        "desc": "",
        "body": ""
      }
		]
	}
];

let dataMap={};

// 递归生成路径，第一层是没有对应文件的，所以不生成path
function createPath(data, lastName) {
	data.forEach(function (item) {
		if (lastName) {
      item.path = lastName + "." + item.name;
      dataMap[item.path] = item;
		}
		item.desc = item.desc.replace(/<|>/g, function (word) {
			if (word === '<') {
				return '&lt;';
			}
			return '&gt;';
    }).replace(/`(.+?)`/g, '<code>$1</code>');
		if (item.data) {
			createPath(item.data, (lastName ? lastName + "." : "") + item.name);
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
	data:allData,
	map:dataMap
};