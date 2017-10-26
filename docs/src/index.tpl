<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DXY-UI DEMO INDEX</title>
  <link rel="stylesheet" href="/dist/css/dxy-ui.min.css">
	<!--<link rel="stylesheet" href="/docs/src/prism.css">
  <link rel="stylesheet" href="/docs/src/docs.css">
  <link rel="stylesheet" href="/docs/src/code.css">
	<link rel="stylesheet" href="/docs/src/example.css">-->
	<link rel="stylesheet" href="/docs/dist/docs.min.css">
</head>
<body>
<div class="container">

<div class="dxy-row">
	<div class="dxy-col-9">
		<% data.forEach(function(item) { %>
		<h2 id="<%=item.name%>"><%=item.title%></h2>
		<p><%- item.desc %></p>
		<% for(itP in item.data){ %>
		<div class="du-docs-section example_area-<%=item.data[itP].path.replace(".","_")%>">
			<h3 id="<%=item.data[itP].path.replace(/\./g,'_')%>" class="page-header">
				<%=item.data[itP].title%>
			</h3>
			<p><%-item.data[itP].desc%></p>
			<% if (item.data[itP].body) { %>
			<div class="du-example">
				<%-item.data[itP].body%>
			</div>
			<figure class="highlight">
				<pre><code class="language-html"><%=item.data[itP].body%></code></pre>
				<a class="j_preview_code"><span>查看代码</span><i class="dxy-search-input-icon dxy-icon dxy-icon-arrow-down-fill"></i></a>
			</figure>
			<% } %>

			<% for (subName in item.data[itP].data) { var subItem = item.data[itP].data[subName]; %>
			<h4 id="<%=subItem.path.replace(/\./g,'_')%>"><%= subItem.title %></h4>
			<p><%- subItem.desc %></p>
			<div class="du-example">
				<%- subItem.body %>
			</div>
			<figure class="highlight">
				<pre><code class="language-html"><%=subItem.body%></code></pre>
				<a class="j_preview_code"><span>查看代码</span><i class="dxy-search-input-icon dxy-icon dxy-icon-arrow-down-fill"></i></a>
			</figure>
			<% } %>
		</div>
		<% } %>
		<% }) %>
	</div>
	
	<div class="dxy-col-3 dxy-tree">
		<nav class="du-docs-sidebar affix" id="j_nav">
			<%- nav %>
			<a class="dxy-go-top dxy-go-top-square-white" href="#top"><i class="dxy-icon dxy-icon-arrow-up"></i></a>
			<!--<a class="back-to-top" href="#top">-->
				<!--返回顶部-->
			<!--</a>-->
		</nav>
	</div>
</div>

</div>
<!--<script src="/docs/src/prism.js"></script>
<script src="/docs/src/index.js"></script>-->
<script src="/docs/dist/docs.min.js"></script>
</body>
</html>
