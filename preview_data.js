const allData = {
	"components":{
		"name":"组件",
		"data":[
			{
				"name":"alert",
				"title":"警告框",
				"desc":"简介",
				"body":"",
			},
			{
				"name":"button-group",
				"title":"水平按钮组",
				"desc":"",
				"body":"",
			},
			{
				"name":"confirm",
				"title":"弹出模态框",
				"desc":"",
				"body":"",
			}
		]
	},
	"elements":{
		"name":"基本元素",
		"data":[
			{
				"name":"button",
				"title":"按钮",
				"desc":"",
				"body":"",
			}
		]
	},
	"extra":{
		"name":"",
		"data":[
			{
				"name":"appearance",
				"title":"",
				"desc":"",
				"body":"",
			}
		]
	}
};

let dataMap={};
for(sortName in allData){
	var sort = allData[sortName];
	for(index in sort.data){
		var it = sort.data[index];
		it.path = sortName+"."+it.name;
		dataMap[it.path] = it;
	}
}

module.exports = {
	data:allData,
	map:dataMap
}