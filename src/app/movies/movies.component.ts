import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service"
import { Movies } from "./movies.model"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = []

  constructor(private ms: MoviesService) { }

  ngOnInit() {
    this.ms.getAllMovies().subscribe((response) => {
      this.movies = response
    })
  }

}
