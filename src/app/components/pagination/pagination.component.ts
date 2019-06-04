import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() numberOfPages: number[] = []

  @Output() next = new EventEmitter<number>()
  @Output() back = new EventEmitter<number>()
  @Output() currentPage = new EventEmitter<number>()

  constructor(private ps: PaginationService) { }

  ngOnInit() {
  }

  setCurrentPage(number: number) {
    this.ps.currentPage = number
    this.currentPage.emit(this.ps.currentPage)
  }

  nextPage() {
    if (this.ps.currentPage > this.numberOfPages.length) {
      this.ps.currentPage = this.numberOfPages.length
    } else {
      this.ps.currentPage = this.ps.currentPage + 1
      this.next.emit(this.ps.currentPage)
    }
  }

  backPage() {
    if (this.ps.currentPage < 1) {
      this.ps.currentPage = 1
    } else {
      this.ps.currentPage = this.ps.currentPage - 1
      this.back.emit(this.ps.currentPage)
    }
  }

}
