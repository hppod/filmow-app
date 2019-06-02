import { Component, OnInit } from '@angular/core';
import { Actor } from "./actor.model"
import { ActorsService } from "./actors.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  constructor(private as: ActorsService, private route: ActivatedRoute) { }

  actors: Actor[]

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.as.getActorsOfMovie(id).subscribe((response) => {
      this.actors = response
    })
  }

}
