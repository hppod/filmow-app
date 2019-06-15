import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ActorService } from "./actor.service"
import { Actor, ActorMovies } from "./../movie/actors/actor.model"

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  actor: Actor
  moviesOfActor: ActorMovies[] = []

  constructor(private as: ActorService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id']

    this.as.getActorInfo(id).subscribe((response) => {
      this.actor = response[0]
    })

    this.as.getMoviesOfActor(id).subscribe((response) => {
      this.moviesOfActor = response
    })

  }

}
