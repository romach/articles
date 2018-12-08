<%@ page import="ua.com.javaman.model.Publication" %>
<%@ page import="java.util.List" %>
<html>
<head>
    <title>Publications</title>
</head>
<body>
<h1>Publications:</h1>
<%
    List<Publication> publications = (List<Publication>) request.getAttribute("publications");
    for (Publication publication : publications) {
%>
<h2><%= publication.title() %></h2>
<p><%= publication.text() %></p>
<%
    }
%>
</body>
</html>