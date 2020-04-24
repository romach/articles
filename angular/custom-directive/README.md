# Create custom directives

## Create custom attribute directive

In this example we will create directive that will change styles of element on hover.

### Initialization

- create file `hovered.directive.ts`
- create class `HoveredDirective`
- add decorator `@Directive` with selector in square brackets: `[appHovered]`
- add directive class to module's declarations

### Change style of the element

- **option 1**: get access to host element injecting `ElementRef` to directive's constructor
  - change style of element via `.nativeElement.style` property in `ngOnInit()`
- **option 2**: it is not recommended to access element's style directly so we can use `Renderer2` class for this
  - inject `Renderer2` via constructor
  - use `Renderer2.setstyle()` method to change element's style
- **option 3:** use `@HostBinding()` decorator on property. Pass element selector to decorator. Then change property value as default

### Add listener to element

- add method with `@HostListener` decorator. Pass event name to decorator's parameter. Set style in this method

### Pass parameters to directive

- add `@Input` properties to directive's class
- pass properties to directive in square brackets: `appHovered [initialColor]="'red'"`
- you can use shorthand: add binding property name to your input such as directive name (but without square brackets). So, you can omit directive name in html tag, use property only: `appHovered [initialColor]="'red'"` > `[appHovered]="'red'"`

## Create custom structural directive

In this example we will create structural directive that will display tag content is condition is even number.

### Initialize directive

- add directive with `[appEven]` selector
- use selector as `<div *appEven="2">Show</div>`

### Implement directive

- inject `TemplateRef<any>` and `ViewContainerRef` via constructor
- add setter `@Input` with custom logic
  - if you need to show element, invoke `ViewContainerRef.createEmbeddedView(TemplateRef)`
  - else - invoke `ViewContainerRef.clear()`