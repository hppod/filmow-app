import { Component, OnInit } from '@angular/core';
import { Movie } from "./../movies/movie.model"
import { SearchService } from "./../components/search/search.service"
import { PaginationService } from "./../components/pagination/pagination.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movies: Movie[] = []
  actors: any[] = []
  searchTerm: string
  count: number = 0
  pages: number
  numberOfPages: number[] = []

  constructor(private ss: SearchService, private ps: PaginationService, private r: Router) { }

  ngOnInit() {
    if (this.ss.urlOrigin == '/home' || this.ss.urlOrigin == '/movies') {
      this.setResultsMovies()
    } else {
      this.setResultsActors()
    }
    this.searchTerm = this.ss.searchTerm
    this.count = this.ss.count
    this.pages = this.ss.pages
    this.ps.currentPage = 1
    this.setNumberOfPages()
  }

  setResultsMovies() {
    this.movies = this.ss.searchMovieResults
  }

  setResultsActors() {
    this.actors = this.ss.searchActorResults
  }

  getMoviesFromOtherPages(currentPage: number, searchTerm: string) {
    const url = this.ss.urlOrigin

    if (url == '/home' || url == '/movies') {
      this.ss.getSearch(url, currentPage, searchTerm).subscribe((response) => {
        this.ss.searchMovieResults = response['results']
        this.pages = response['pages']
        this.setResultsMovies()
      })
    } else {
      this.ss.getSearch(url, currentPage, searchTerm).subscribe((response) => {
        this.ss.searchActorResults = response['results']
        this.pages = response['pages']
        this.setResultsActors()
      })
    }

  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.getMoviesFromOtherPages(this.ps.currentPage, this.searchTerm)
  }

  next() {
    this.getMoviesFromOtherPages(this.ps.currentPage, this.searchTerm)
  }

  back() {
    this.getMoviesFromOtherPages(this.ps.currentPage, this.searchTerm)
  }

}
