import { Component, OnInit } from '@angular/core';
import { ActorsService } from "./actors.service"
import { Actor } from "./../movie/actors/actor.model"
import { PaginationService } from "./../components/pagination/pagination.service"

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors: Actor[] = []
  pages: number
  numberOfPages: number[] = []

  constructor(private as: ActorsService, private ps: PaginationService) { }

  ngOnInit() {
    this.ps.currentPage = 1
    this.findActors(this.ps.currentPage)
  }

  findActors(currentPage: number) {
    this.as.getInfoActors(currentPage).subscribe((response) => {
      this.actors = response.result
      this.pages = response.pages
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.findActors(this.ps.currentPage)
  }

  next() {
    this.findActors(this.ps.currentPage)
  }

  back() {
    this.findActors(this.ps.currentPage)
  }

}
