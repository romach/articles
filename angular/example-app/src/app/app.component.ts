import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  twoWayData = 'two-way data';
  cards: Card[] = [
    {title: "Title", text: "Text"},
    {title: "Title 2", text: "Text 2"}
  ]
}
