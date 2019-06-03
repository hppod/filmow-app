import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
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
  reviewForm: FormGroup
  rateValue: number = this.rs.rate
  id: number

  constructor(private rs: ReviewsService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.params['id']
    this.rs.getReviews(this.id).subscribe((response) => {
      this.reviews = response
      this.title = response[0].TITLE
    })

    this.reviewForm = this.fb.group({
      USER_ID: 5,
      MOVIE_ID: this.id,
      RATING: undefined,
      REVIEW: this.fb.control(null, [Validators.required, Validators.maxLength(1000)]),
      DATE_REVIEW: new Date().toISOString()
    })
  }

  rate() {
    this.rated = true
  }

  sendReview() {
    this.reviewForm.patchValue({
      RATING: this.rs.rate
    })
    this.rs.sendReview(this.reviewForm.value).subscribe(() => {
      this.rs.rate = 0
      this.reviewForm.reset()
      this.rs.getReviews(this.id).subscribe((response) => {
        this.reviews = response
      })
    })
  }

}
