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
        "body": ""
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
      },
      {
        "name": "table",
        "title": "表格",
        "desc": "",
        "body": ""
      },
      {
        "name": "form",
        "title": "表单",
        "desc": "",
        "body": "",
        "data": [
          {
            "name": "label",
            "title": "label",
            "desc": "",
            "body": ""
          }
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