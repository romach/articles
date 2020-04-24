import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  constructor(private fb: FormBuilder) { }

  @Input() user
  @Output() userSubmitted = new EventEmitter<object>();
  userForm = this.fb.group({
    firstName: [this.user && this.user.firstName, Validators.required],
    secondName: [this.user && this.user.secondName, Validators.required]
  })

  onSubmit() {
    this.userSubmitted.emit(this.userForm.value)
  }
}
