import { Component, OnInit } from '@angular/core';
import { Storyline, Director, Writer } from './storyline.model'
import { MovieService } from './../movie.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-storyline',
  templateUrl: './storyline.component.html',
  styleUrls: ['./storyline.component.scss']
})
export class StorylineComponent implements OnInit {

  storyline: Storyline
  directors: Director[] = []
  writers: Writer[] = []

  constructor(private ms: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']

    this.ms.getStoryline(id).subscribe((response) => {
      this.storyline = response[0]
    })

    this.ms.getDirectors(id).subscribe((response) => {
      this.directors = response
    })

    this.ms.getWriters(id).subscribe((response) => {
      this.writers = response
    })
  }

}
