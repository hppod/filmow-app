import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Review } from "./review.model"
import { Filmow_API } from "./../../app.api"

@Injectable()
export class ReviewsService {

    rate: number = 0

    constructor(private http: HttpClient) { }

    getReviews(id: number): Observable<Review[]> {
        return this.http.get<Review[]>(`${Filmow_API}/movie-reviews/${id}`)
    }
}