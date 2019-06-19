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
  count: number
  numberOfPages: number[] = []
  column: string = 'NAME'
  order: string = 'ASC'

  options: any[] = [
    { OPTION: 'Nome: A - Z', COLUMN: 'NAME', ORDER: 'ASC' },
    { OPTION: 'Nome: Z - A', COLUMN: 'NAME', ORDER: 'DESC' },
    { OPTION: 'Nascimento: Menor - Maior', COLUMN: 'BORNDATE', ORDER: 'ASC' },
    { OPTION: 'Nascimento: Maior - Menor', COLUMN: 'BORNDATE', ORDER: 'DESC' },
  ]

  constructor(private as: ActorsService, private ps: PaginationService) { }

  ngOnInit() {
    this.ps.currentPage = 1
    this.findActors(this.ps.currentPage, this.column, this.order)
  }

  findActors(currentPage: number, column: string, order: string) {
    this.as.getInfoActors(currentPage, column, order).subscribe((response) => {
      this.actors = response['result']
      this.pages = response['pages']
      this.count = response['count']
      this.setNumberOfPages()
    })
  }

  setNumberOfPages() {
    this.numberOfPages = Array.from({ length: this.pages }, (v, k) => ++k)
  }

  currentPage() {
    this.findActors(this.ps.currentPage, this.column, this.order)
  }

  next() {
    this.findActors(this.ps.currentPage, this.column, this.order)
  }

  back() {
    this.findActors(this.ps.currentPage, this.column, this.order)
  }

  setOrder(option) {
    this.column = option.COLUMN
    this.order = option.ORDER
    this.ps.currentPage = 1

    this.findActors(this.ps.currentPage, this.column, this.order)
  }

}
