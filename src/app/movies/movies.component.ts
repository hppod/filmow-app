import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./movies.service"
import { Movie } from "./movie.model"
import { PaginationService } from 'app/components/pagination/pagination.service';
import { SearchService } from "./../components/search.service"

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  pages: number
  count: number
  numberOfPages: number[] = []

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

  constructor(private ms: MoviesService, private ps: PaginationService, private ss: SearchService) { }

  ngOnInit() {
    this.ps.currentPage = 1

    this.ms.getGenres().subscribe((response) => {
      this.genres = response
      this.genres.unshift({ GENRE: 'Todos' })
    })

    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)

  }

  findMovies(currentPage: number, column: string, order: string) {
    this.ms.getInfoMovies(currentPage, column, order).subscribe((response) => {
      this.movies = response['result']
      this.pages = response['pages']
      this.count = response['count']
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
  }

  next() {
    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
  }

  back() {
    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
  }

  setOrder(option) {
    this.ms.column = option.COLUMN
    this.ms.order = option.ORDER
    this.ps.currentPage = 1

    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
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
    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
  }

  setShow(option) {
    this.ps.currentPage = 1
    this.ms.params = this.ms.params.set('date', option)
    this.findMovies(this.ps.currentPage, this.ms.column, this.ms.order)
  }

}
