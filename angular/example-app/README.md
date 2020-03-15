## Create application

Install Angular CLI

```bash
npm i -g @angular/cli
```

Initialize new project

```bash
ng new example-app
```

## Modules

- `@NgModule` decorator
  - declarations
  - imports
  - providers
  - bootstrap

## Components

- `@Component` decorator
  - selector - parent tag for component
  - templateUrl - HTML content for component
  - styleUrls - styles

### Create new component manually

Create `card` directory in `app`

Create `card.component.ts` in `card` directory

Create `CardComponent` class

Import `Component` decorator

Add `Component` decorator to class

- selector - `app-card`
- templateUrl - `./card.component.html`
- styleUrls - array of css files

Add component to `declarations` of `@NgModule` decorator

Use `<app-card/>` tag in template of parent component

### Create new component by Angular CLI

```bash
ng g c form --skipTests
```

### Add properties to component

Add field to component class

```diff
export class CardComponent {
+ title = "Title" 
}
```

Add interpolated field to template

```diff
<div class="card">
- <h2 class="title">Card</h2>
+ <h2 class="title">{{title}}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quam.</p>
</div>
```

### Make action after component creation

Implement `OnInit` interface

Implement `ngOnInit()` 

### Event binding

#### With method

Create `handler()` method in component

Add `<button>(click)="handler()"</button>` to HTML element in template

#### Inline binding

Write handler in template

```html
<button (click)="title = 'inline'">Button</button>
```

### Bind form input to value

*Option 1*

```html
<input type="text" (input) = "handleInput($event)" [value] = "title">
```

```typescript
handleInput(event) {
  this.title = event.target.value
}
```

*Option 2* - template reference variable

```html
<input type="text" #titleInput (input) = "handleInput(titleInput)" [value] = "title">
```

```typescript
handleInput(titleInput) {
  this.title = titleInput.value
}
```

*Option 3* - use `ngModel` directive from `FormsModule`

```bash
npm i @angular/forms
```

In module

```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
+ import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
+   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In template

```html
<input type="text" [(ngModel)]="title" />
```

### Pass input parameters to components

Add `@Input() ` decorator to component's property

```typescript
@Input() card : Card
```

Pass property to child component in parent component

```html
<app-card *ngFor="let card of cards" [card]="card"></app-card>
```

## Directives

`ngStyle` - add styles to element depending of model

```html
<input
  [ngStyle]="{
    color: title.length >= 5 ? 'red' : 'black'
  }"
  type="text"
  [(ngModel)]="title"
/>
```

`ngClass` - evaluate classes

```html
<some-element
	[ngClass]="{'first': true, 'second': true, 'third': false}"
>...</some-element>
```

`*ngIf` - show content conditionally

```html
<div *ngIf="condition">Content to render when condition is true.</div>
```

`*ngFor` - iterates over collection

```html
<li *ngFor="let user of users; index as i; first as isFirst">
  {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```