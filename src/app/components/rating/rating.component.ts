import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReviewsService } from "./../../movie/reviews/reviews.service"

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  rate: number = 0
  previousRate: number
  @Output() rated = new EventEmitter<number>()

  constructor(private rs: ReviewsService) { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate = r
    this.rs.rate = r
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate
    }
    this.rate = r
    this.rs.rate = r
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate
      this.rs.rate = this.previousRate
      this.previousRate = undefined
    }
  }

}
