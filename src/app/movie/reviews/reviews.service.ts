import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Review } from "./review.model"
import { Filmow_API } from "./../../app.api"

@Injectable()
export class ReviewsService {

    rate: number = 0

    constructor(private http: HttpClient) { }

    getReviews(id: string): Observable<Review[]> {
        return this.http.get<Review[]>(`${Filmow_API}/movie-reviews/${id}`)
    }

    sendReview(review: Review) {
        return this.http.post<Review>(`${Filmow_API}/rr`, review)
    }

    allowReview(movieId: string, userId: string): Observable<String> {
        return this.http.get<String>(`${Filmow_API}/verifyReviews/${movieId}/${userId}`)
    }
}