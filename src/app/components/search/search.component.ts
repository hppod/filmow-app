import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { SearchService } from "./search.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup

  constructor(private fb: FormBuilder, private ss: SearchService, private r: Router) { }

  ngOnInit() {
    this.r.routeReuseStrategy.shouldReuseRoute = () => false

    this.searchForm = this.fb.group({
      search: this.fb.control(null)
    })
  }

  goSearch() {
    this.ss.searchTerm = this.searchForm.get('search').value

    this.ss.getSearch(1, this.ss.searchTerm).subscribe((response) => {

      if (response['results'].length == 1) {
        const id = response['results'][0].ID
        this.r.navigate(['/movie', `${id}`])
        this.searchForm.reset()
      } else {
        this.ss.searchMovieResults = response['results']
        this.ss.count = response['count']
        this.ss.pages = response['pages']
        this.r.navigate(['/search', `${this.ss.searchTerm}`])
        this.searchForm.reset()
      }

    })
  }

}
