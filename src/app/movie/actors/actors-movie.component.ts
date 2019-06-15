import { Component, OnInit } from '@angular/core';
import { Actor } from "./actor.model"
import { ActorsService } from "./actors.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-actors-movie',
  templateUrl: './actors-movie.component.html',
  styleUrls: ['./actors-movie.component.scss']
})
export class ActorsMovieComponent implements OnInit {

  constructor(private as: ActorsService, private route: ActivatedRoute) { }

  actors: Actor[]

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.as.getActorsOfMovie(id).subscribe((response) => {
      this.actors = response
    })
  }

}
