import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service"
import { Movie } from "./movie.model"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []

  constructor(private ms: MoviesService) { }

  ngOnInit() {
    this.ms.getInfoMovies().subscribe((response) => {
      this.movies = response
    })
  }

}
