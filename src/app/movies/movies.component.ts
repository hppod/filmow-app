import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service"
import { Movie } from "./movie.model"
import { PaginationService } from 'app/components/pagination/pagination.service';
import { HttpParams } from "@angular/common/http"

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

  options: any[] = [
    { OPTION: 'Nome: A - Z', COLUMN: 'TITLE', ORDER: 'ASC' },
    { OPTION: 'Nome: Z - A', COLUMN: 'TITLE', ORDER: 'DESC' },
    { OPTION: 'Lançamento: Menor - Maior', COLUMN: 'DATE_PREMIERE', ORDER: 'ASC' },
    { OPTION: 'Lançamento: Maior - Menor', COLUMN: 'DATE_PREMIERE', ORDER: 'DESC' },
  ]

  shows: any[] = [
    { OPTION: 'Todos', SHOW: 'IS NOT NULL' },
    { OPTION: 'Em cartaz', SHOW: '<now()' },
    { OPTION: 'Em breve', SHOW: '>now()' }
  ]

  genres: any[] = []

  constructor(private ms: MoviesService, private ps: PaginationService) { }

  ngOnInit() {
    this.ps.currentPage = 1

    this.ms.getGenres().subscribe((response) => {
      this.genres = response
      this.genres.unshift({ GENRE: 'Todos' })
    })

    this.findMovies(this.ps.currentPage, this.column, this.order)

  }

  findMovies(currentPage: number, column: string, order: string) {
    this.ms.getInfoMovies(currentPage, column, order).subscribe((response) => {
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
    let genre: string

    this.ps.currentPage = 1

    if (option == 'Todos') {
      genre = 'IS NOT NULL'
    } else {
      genre = `="${option}"`
    }

    this.ms.params = this.ms.params.set('genre', genre)
    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

  setShow(option) {
    this.ms.params = this.ms.params.set('date', option)
    this.findMovies(this.ps.currentPage, this.column, this.order)
  }

}
