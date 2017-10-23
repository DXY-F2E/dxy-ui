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
				"desc":"",
				"body":"",
			},
			{
				"name":"input-group",
				"title":"输入框组",
				"desc":"",
				"body":"",
			},
			{
				"name":"search-select",
				"title":"下拉选择框",
				"desc":"",
				"body":"",
			},
			{
				"name":"label",
				"title":"标签和徽章",
				"desc":"",
				"body":"",
			},
			{
				"name":"popover",
				"title":"气泡提示",
				"desc":"",
				"body":"",
			},
			{
				"name":"alert",
				"title":"警告框",
				"desc":"",
				"body":"",
			},
			{
				"name":"confirm",
				"title":"弹出确认框",
				"desc":"",
				"body":"",
			},
			{
				"name":"modal",
				"title":"模态框",
				"desc":"",
				"body":"",
			},
			{
				"name":"navigation",
				"title":"导航栏",
				"desc":"",
				"body":"",
			},
			{
				"name":"pagination",
				"title":"翻页",
				"desc":"",
				"body":"",
			},
			{
				"name":"go-top",
				"title":"回到顶部",
				"desc":"",
				"body":"",
			},
			{
				"name":"loading",
				"title":"加载",
				"desc":"",
				"body":"",
			},
			{
				"name":"progress",
				"title":"进度条",
				"desc":"",
				"body":"",
			},
			{
				"name":"step-bar",
				"title":"步骤条",
				"desc":"",
				"body":"",
			},
			{
				"name":"tree",
				"title":"选项树",
				"desc":"",
				"body":"",
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