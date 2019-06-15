import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../movie.model'

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: Movie[]
  @Input() storyline: String
  @Input() character_name: string

  constructor() { }

  ngOnInit() {
  }

}
