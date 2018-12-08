package ua.com.javaman.web;

import ua.com.javaman.model.Publication;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.util.Arrays.asList;

public class PublicationServlet extends HttpServlet {
    @Override
    protected void service(
        final HttpServletRequest request, final HttpServletResponse response
    ) throws ServletException, IOException {
        request.setAttribute(
            "publications", asList(new Publication("Title 1", "Text 1"), new Publication("Title 2", "Text 2"))
        );
        final String view = "jsp/publications.jsp";
        final RequestDispatcher dispatcher = request.getRequestDispatcher(view);
        dispatcher.forward(request, response);
    }
}