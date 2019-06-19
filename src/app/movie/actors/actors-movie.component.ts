import { Component, OnInit } from '@angular/core';
import { Actor } from "./actor.model"
import { ActorsMovieService } from "./actors.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-actors-movie',
  templateUrl: './actors-movie.component.html',
  styleUrls: ['./actors-movie.component.scss']
})
export class ActorsMovieComponent implements OnInit {

  constructor(private ams: ActorsMovieService, private route: ActivatedRoute) { }

  actors: Actor[]

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.ams.getActorsOfMovie(id).subscribe((response) => {
      this.actors = response
    })
  }

}
