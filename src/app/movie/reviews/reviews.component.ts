import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ReviewsService } from "./reviews.service"
import { Review } from "./review.model"
import { CookieService } from "ngx-cookie-service"

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
  movieId: string
  userId: string

  allowReview: boolean

  cookieIsLoggedinValue: string

  constructor(private rs: ReviewsService, private route: ActivatedRoute, private fb: FormBuilder, private cs: CookieService) { }

  ngOnInit() {

    this.cookieIsLoggedinValue = this.cs.get('isLoggedin')
    this.userId = this.cs.get('userId')


    this.movieId = this.route.parent.snapshot.params['id']
    this.rs.getReviews(this.movieId).subscribe((response) => {
      this.reviews = response
    })

    if (this.cookieIsLoggedinValue == 't') {
      this.allowReviews(this.movieId, this.userId)
    }

    this.showButtonRating()

    this.reviewForm = this.fb.group({
      USER_ID: this.userId,
      MOVIE_ID: this.movieId,
      RATING: undefined,
      REVIEW: this.fb.control(null, [Validators.required, Validators.maxLength(1000)]),
      DATE_REVIEW: new Date().toISOString()
    })

  }

  showButtonRating() {
    if (this.cookieIsLoggedinValue == 't' && this.allowReview == true) {
      return false
    } else {
      return true
    }
  }

  verifyLoggedin() {
    if (this.cookieIsLoggedinValue == 't') {
      return false
    }
    return true
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
      this.rs.getReviews(this.movieId).subscribe((response) => {
        this.reviews = response
      })
    })
  }

  allowReviews(movieId: string, userId: string) {
    this.rs.allowReview(movieId, userId).subscribe((response) => {
      if (response['allowReview'] == 'true') {
        this.allowReview = true
      } else {
        this.allowReview = false
      }
    })
  }

}
