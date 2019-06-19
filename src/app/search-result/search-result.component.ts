import { Component, OnInit } from '@angular/core';
import { Movie } from "./../movies/movie.model"
import { SearchService } from "./../components/search/search.service"
import { PaginationService } from "./../components/pagination/pagination.service"

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movies: Movie[] = []
  searchTerm: string
  count: number = 0
  pages: number
  numberOfPages: number[] = []

  constructor(private ss: SearchService, private ps: PaginationService) { }

  ngOnInit() {
    this.setMoviesResult()
    this.searchTerm = this.ss.searchTerm
    this.count = this.ss.count
    this.pages = this.ss.pages
    this.ps.currentPage = 1
    this.setNumberOfPages()
  }

  setMoviesResult() {
    this.movies = this.ss.searchMovieResults
  }

  getMoviesFromOtherPages(currentPage: number, searchTerm: string) {
    this.ss.getSearch(currentPage, searchTerm).subscribe((response) => {
      this.ss.searchMovieResults = response['results']
      this.pages = response['pages']
      this.setMoviesResult()
    })
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
