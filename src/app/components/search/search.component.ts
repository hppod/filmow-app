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

  definePlaceholder() {
    if (this.r.url == '/movies') {
      return 'Buscar por filme...'
    } else {
      return 'Buscar por ator...'
    }
  }

  goSearch() {
    this.ss.urlOrigin = this.r.url
    this.ss.searchTerm = this.searchForm.get('search').value

    const route = this.ss.urlOrigin

    this.ss.getSearch(route, 1, this.ss.searchTerm).subscribe((response) => {
      if (response['results'].length == 1) {
        const id = response['results'][0].ID
        if (route == '/movies') {
          this.r.navigate(['/movie', `${id}`])
        } else {
          this.r.navigate(['/actor', `${id}`])
        }
        this.searchForm.reset()
      } else {
        if (route == '/movies') {
          this.ss.searchMovieResults = response['results']
        } else {
          this.ss.searchActorResults = response['results']
        }
        this.ss.count = response['count']
        this.ss.pages = response['pages']
        this.r.navigate(['/search', `${this.ss.searchTerm}`])
        this.searchForm.reset()
      }
    })

  }

}
