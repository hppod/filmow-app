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
  currentPage: number = 1
  pages: number
  numberOfPages: number[] = []

  constructor(private ms: MoviesService) { }

  ngOnInit() {
    this.findMovies(this.currentPage)
  }

  findMovies(currentPage: number) {
    this.ms.getInfoMovies(currentPage).subscribe((response) => {
      this.movies = response.result
      this.pages = response.pages
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  setCurrentPage(number: number) {
    this.currentPage = number
    this.findMovies(this.currentPage)
  }

  nextPage() {
    if (this.currentPage > this.numberOfPages.length) {
      this.currentPage = this.pages
    } else {
      this.currentPage = this.currentPage + 1
      this.findMovies(this.currentPage)
    }
  }

  backPage() {
    if (this.currentPage < 1) {
      this.currentPage = 1
    } else {
      this.currentPage = this.currentPage - 1
      this.findMovies(this.currentPage)
    }
  }

}
