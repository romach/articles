## `DispatcherServlet`
- implementation of Front Controller Pattern;
- entry point of application;
- handles all incoming requests;
- bridge between Java and Spring;

## `ServletContext`
- is created by the web container at time of deploying the project;
- is used to get configuration information from `web.xml`;
- interface between the container and servlet;

## `BeanFactory`
- bean instantiation/wiring;

## `ApplicationContext`
- initialized by a `ContextLoaderListener`;
- there will be always be one application context per web application;
- functions:
    - bean instantiation/wiring;
    - automatic `BeanPostProcessor` registration;
    - automatic `BeanFactoryPostProcessor` registration;
    - convenient `MessageSource` access (for i18n);
    - `ApplicationEvent` publication;

## `WebApplicationContext`
- servlet-specific context;
- each dispatcher servlet has its own servlet-context;
- links:
    - [ApplicationContext vs WebApplicationContext](http://www.jcombat.com/spring/applicationcontext-webapplicationcontext)
    
## Special bean types

- `HandlerMapping`