import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicing-directives';
  displayContent = false;
  clickTimestamps = [];

  onButtonClick() {
    this.displayContent = !this.displayContent;
    this.clickTimestamps.push(new Date().toString());
  }
}
