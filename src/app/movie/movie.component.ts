import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from './movie.service'
import { Movie } from './../movies/movie.model'
import { Rating } from './rating.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie
  rating: Rating
  trailer: any
  comingSoon: boolean
  curDate = new Date().toISOString()

  constructor(private ms: MovieService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id']
    this.ms.getMovie(id).subscribe((response) => {
      console.log(response)
      this.movie = response
      this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(response.TRAILER_URL)
      this.comingSoon = this.comingSoonMovie(response.DATE_PREMIERE, this.curDate)
    })

    this.ms.getAvgRating(id).subscribe((response) => {
      this.rating = response[0]
    })
  }

  comingSoonMovie(premiereDate: string, currentDate: string) {
    if (premiereDate > currentDate) {
      return true
    }
    return false
  }
}
