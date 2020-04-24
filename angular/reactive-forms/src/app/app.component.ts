import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl("")
  user = {
    firstName: "",
    secondName: "",
    editing: false
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit(updatedUser) {
    this.user = {...this.user, ...updatedUser}
    this.user.editing = false;
  }
}
