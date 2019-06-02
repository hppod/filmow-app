import { Component, OnInit, Input } from '@angular/core';
import { Actor } from "./../actor.model"

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})
export class CardActorComponent implements OnInit {

  @Input() actor: Actor

  constructor() { }

  ngOnInit() {
  }

}
