# Generate Spring Boot project

## Generate with Spring	Initializr

```bash
curl https://start.spring.io/starter.zip -d dependencies=web \
    -d type=gradle-project -o project.zip
```

## Generate with Spring CLI

```bash
spring init -d=web --build=gradle project
```