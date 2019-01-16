<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
  <title>DXY-UI 使用文档</title>
	<meta name="description" content="DXY-UI 是一款简洁、优雅、轻量、零侵入的样式库"/>
	<meta name="keywords" content="DXY-UI,DXY UI,样式库,UI库,丁香园"/>
	<!-- <link rel="short icon" href="../docs/img/favicon.ico"> -->
  <link rel="stylesheet" href="../dist/css/dxy-ui.min.css">
	<link rel="stylesheet" href="../docs/dist/docs.min.css">
</head>
<body>
<header class="dxy-clear-fix">
	<div class="logo dxy-float-left">
		<a href="/dxy-ui/docs"><img src="../docs/img/logo.svg" width="125" height="32"></a>
	</div>
	<div class="version dxy-float-right">1.0.1</div>
	<ul class="tab dxy-float-right" id="j_tab">
		<li><a href="#elements">基本元素</a></li>
		<li><a href="#components">组件</a></li>
		<li><a href="#extra">辅助和修饰</a></li>
		<li><a target="blank" href="https://github.com/DXY-F2E/dxy-ui">GitHub</a></li>
	</ul>
</header>

<div class="container">
	<nav class="dxy-tree nav" id="j_nav">
		<%- nav %>
	</nav>

	<div class="content" id="j_content">
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
</div>

<script src="../docs/dist/docs.min.js"></script>
</body>
</html>
