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
  column: string = 'DATE_PREMIERE'
  order: string = 'DESC'
  genre: string

  options: any[] = [
    { OPTION: 'Nome: A - Z', COLUMN: 'TITLE', ORDER: 'ASC' },
    { OPTION: 'Nome: Z - A', COLUMN: 'TITLE', ORDER: 'DESC' },
    { OPTION: 'Lançamento: Menor - Maior', COLUMN: 'DATE_PREMIERE', ORDER: 'ASC' },
    { OPTION: 'Lançamento: Maior - Menor', COLUMN: 'DATE_PREMIERE', ORDER: 'DESC' },
  ]

  genres: any[] = []

  constructor(private ms: MoviesService, private ps: PaginationService) { }

  ngOnInit() {
    this.ps.currentPage = 1

    this.ms.getGenres().subscribe((response) => {
      this.genres = response
    })

    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  findMovies(currentPage: number, column: string, order: string) {
    this.ms.getInfoMovies(currentPage, column, order).subscribe((response) => {
      console.log(response)
      this.movies = response['result']
      this.pages = response['pages']
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  next() {
    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  back() {
    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  setOrder(option) {
    this.column = option.COLUMN
    this.order = option.ORDER
    this.ps.currentPage = 1

    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  setFilter(option) {
    this.genre = option
    this.ps.currentPage = 1

    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

}
