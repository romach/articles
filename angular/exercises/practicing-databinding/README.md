## Assignment
1. Add a Input field which updates a property ('username') via Two-Way-Binding
2. Output the username property via String interpolation (in a paragraph below the input)
3. Add a button which may only be clicked if the username is NOT an empty string
4. Upon clicking the button, the username should be reset to an empty string

## Solution
Generate progect with `ng new practicing-databinding --routing=false --style=css`

Add property to the component

```
userName: string = '';
```

Add input with two-way databinding

```
<input type="text" [(ngModel)]="userName">
```

Add `FormsModule` from `@angular/forms` to imports of main module

Interpolate user name to paragraph below the input

```
<p>{{userName || '&nbsp;'}}</p>
```

Add button with property binding

```
<button [disabled]="userName == ''">Reset</button>
```

Handle button click event

Create `onUserNameReset()` method

```
onUserNameReset() {
  this.userName = '';
}
```

Bind `click` event to button

```
<button [disabled]="userName == ''" (click)="onUserNameReset()">Reset</button>
```