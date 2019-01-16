<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%=data.title%></title>
  <link rel="stylesheet" href="/dist/css/dxy-ui.min.css">
  <link rel="stylesheet" href="/docs/src/example.css">
</head>
<body>
<h2><a href="/examples/">Examples</a></h2>
<h3><%=data.title%></h3>
<br>
<div class="example_area-<%=data.path.replace(".","_")%>">
	<div class="bs-example">
	<%-body%>
	</div>
</div>
</body>
</html>
