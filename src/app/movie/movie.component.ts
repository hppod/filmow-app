import { Component, OnInit } from '@angular/core';
import { Movie } from './../movies/movie.model'
import { MovieService } from './movie.service'
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie

  constructor(private ms: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id']
    this.ms.getMovie(id).subscribe((response) => {
      this.movie = response
      console.log(response)
    })
  }

}
