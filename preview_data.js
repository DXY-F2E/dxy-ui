const allData = [
  {
    "name": "elements",
    "title":"基本元素",
    "expanded": true,
    "data":[
      {
        "name": "text",
        "title": "文本",
        "desc": "",
        "body": ""
      },
      {
        "name": "list",
        "title": "列表",
        "desc": "",
        "body": "",
				"data": [
					{
						"name": "horizon",
						"title": "水平列表",
						"desc": "",
						"body": ""
					},
          {
            "name": "dot",
            "title": "实心符号列表",
            "desc": "",
            "body": ""
          },
          {
            "name": "circle",
            "title": "空心符号列表",
            "desc": "",
            "body": ""
          },
          {
            "name": "dl",
            "title": "短语列表",
            "desc": "",
            "body": ""
          },
          {
            "name": "dl-horizon",
            "title": "水平短语列表",
            "desc": "",
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
        "desc":"",
        "body":"",
				"data": [
					{
						"name": "size",
						"title": "多个尺寸",
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
            "name": "link",
            "title": "链接/文字",
            "desc": "",
            "body": ""
          },
          {
            "name": "disabled",
            "title": "禁用状态",
            "desc": "",
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
		"expanded": true,
		"data":[
			{
				"name":"button-group",
				"title":"按钮组",
				"desc":"将按钮组合在同个容器内，自定义各个按钮的状态与功能",
				"body":"",
				"data": [
					{
						"name":"more",
						"title":"三个及以上按钮",
						"desc":"可以更改按钮数量，假设你需要的话",
						"body":""
					},
					{
						"name":"vertical",
						"title":"竖直方向",
						"desc":"按钮数量，按钮状态一样可以自定义",
						"body":""
					}
				]
			},
			{
				"name":"input-group",
				"title":"输入框组",
				"desc":"对文本输入框进行扩展，添加所需要的文本标签或按钮",
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
						"title":"与按钮，标签组合",
						"desc":"",
						"body":""
					}
				]
			},
			{
				"name":"search-select",
				"title":"下拉选择框",
				"desc":"具有搜索功能的下拉选择框，需结合JavaScript实现",
				"body":"",
				"data":[
					{
						"name":"multiple",
						"title":"多选",
						"desc":"提供多选功能，已标签形式展现选择结果",
						"body":""
					}
				]
			},
			{
				"name":"label",
				"title":"标签",
				"desc":"用于标记或选择",
				"body":"",
				"data":[
					{
						"name":"close",
						"title":"可删除",
						"desc":"提供删除按钮",
						"body":""
					},
					{
						"name":"badge",
						"title":"徽章",
						"desc":"用于展示未读消息等等",
						"body":""
					}
				]
			},
			{
				"name":"popover",
				"title":"气泡提示",
				"desc":"用于标记提示，提供四个方向可选择",
				"body":"",
				"data":[
					{
						"name":"custom",
						"title":"内容丰富",
						"desc":"可以自定义内容，分为标题和主体内容",
						"body":""
					}
				]
			},
			{
				"name":"alert",
				"title":"警告框",
				"desc":"一般用于代替浏览器原生的alert，统一形式，提供四种色值来代表不同意义",
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
				"desc":"一般用于代替浏览器原生的confirm，统一形式，可添加标题与主体文案",
				"body":"",
			},
			{
				"name":"modal",
				"title":"模态框",
				"desc":"显示一块单独的内容，自定义标题与主体内容",
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
				"desc":"提供翻页样式，需结合JavaScript实现功能",
				"body":"",
				"data":[
					{
						"name":"no-number",
						"title":"无页码",
						"desc":"仅仅提供翻页按钮",
						"body":"",
					},
					{
						"name":"jump",
						"title":"跳转",
						"desc":"可自定义页码进行跳转",
						"body":"",
					}
				]
			},
			{
				"name":"go-top",
				"title":"回到顶部",
				"desc":"一般放置于屏幕下方，供点击返回顶部或指定位置，提供多个图标",
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
				"desc":"等待数据加载时的动画效果",
				"body":"",
				"data":[
					{
						"name":"text",
						"title":"带文字",
						"desc":"可添加自定义文字提示",
						"body":"",
					}
				]
			},
			{
				"name":"progress",
				"title":"进度条",
				"desc":"为当前工作流或者动作提供清晰的进度反馈",
				"body":"",
				"data":[
					{
						"name":"thin",
						"title":"更细",
						"desc":"",
						"body":"",
					},
					{
						"name":"result",
						"title":"成功/失败",
						"desc":"",
						"body":"",
					}
				]
			},
			{
				"name":"step-bar",
				"title":"步骤条",
				"desc":"用于用户注册，信息填写等等步骤清晰的动作的流程展示",
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
				"desc":"多层级的选项卡，自定义层级及内容",
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
    "expanded": true,
		"data":[
			{
				"name":"appearance",
				"title":"外观",
				"desc":"",
				"body":"",
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