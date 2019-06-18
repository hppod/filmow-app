import { Component, OnInit } from '@angular/core';
import { Movie } from "./../movies/movie.model"
import { SearchService } from "./../components/search/search.service"

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  movies: Movie[] = []
  searchTerm: string
  count: number = 0

  constructor(private ss: SearchService) { }

  ngOnInit() {
    this.setMoviesResult()
    this.searchTerm = this.ss.searchTerm
    this.count = this.ss.count
  }

  setMoviesResult() {
    this.movies = this.ss.searchMovieResults
  }

}
