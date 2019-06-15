import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service"
import { Movie } from "./movie.model"
import { PaginationService } from 'app/components/pagination/pagination.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  pages: number
  numberOfPages: number[] = []

  constructor(private ms: MoviesService, private ps: PaginationService) { }

  ngOnInit() {
    this.ps.currentPage = 1
    this.findMovies(this.ps.currentPage)
  }

  findMovies(currentPage: number) {
    this.ms.getInfoMovies(currentPage).subscribe((response) => {
      console.log(response)
      this.movies = response.result
      this.pages = response.pages
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.findMovies(this.ps.currentPage)
  }

  next() {
    this.findMovies(this.ps.currentPage)
  }

  back() {
    this.findMovies(this.ps.currentPage)
  }

}
