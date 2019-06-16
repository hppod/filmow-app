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
  @Input() date_premiere: string
  curDate = new Date().toISOString()
  comingSoon: boolean

  constructor() { }

  ngOnInit() {
    this.comingSoon = this.comingSoonMovie(this.date_premiere, this.curDate)
  }


  comingSoonMovie(premiereDate: string, currentDate: string) {
    if (premiereDate > currentDate) {
      return true
    }
    return false
  }

}
