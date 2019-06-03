import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ReviewsService } from "./reviews.service"
import { Review } from "./review.model"

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]
  title: string
  rated: boolean

  constructor(private rs: ReviewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.rs.getReviews(id).subscribe((response) => {
      this.reviews = response
      this.title = response[0].TITLE
    })
  }

  rate() {
    this.rated = true
  }

  sendReview() {
    console.log(this.rs.rate)
  }

}
