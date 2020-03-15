import { Component, OnInit, Input } from '@angular/core'
import {Card} from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card : Card

  ngOnInit() {
    setTimeout(() => { this.card.text = "changed text" }, 4000)
  }

  changeTitle() {
    this.card.title = "Changed"
  }

  handleInput(titleInput) {
    this.card.title = titleInput.value
  }
}