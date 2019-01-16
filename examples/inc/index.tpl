<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DXY-UI DEMO INDEX</title>
  <!-- <link rel="stylesheet" href="/dist/css/dxy-ui.min.css"> -->
</head>
<body>
  <h2><a href="/docs">Docs</a></h2>

  <% data.forEach(function(item0) { %>
    <h2><%=item0.title%></h2>
    <%if(item0.data.length){%>
    <ul>
    <% item0.data.forEach(function(item1){ %>
      <li>
        <%if(!item1.data || !item1.data.length){%>
          <a href="/examples/<%=item1.path.replace(/\./g,'/')%>">
            <%=item1.title%>
          </a>
        <%}else{%>
          <%=item1.title%>
        <%}%>
      </li>
      <%if(item1.data && item1.data.length){%>
        <ul>
        <% item1.data.forEach(function(item2){ %>
          <li>
            <a href="/examples/<%=item2.path.replace(/\./g,'/')%>">
              <%=item2.title%>
            </a>
          </li>
        <% }) %>
        </ul>
      <%}%>
    <% }) %>
    </ul>
    <%}%>
	<% }) %>
</html>
