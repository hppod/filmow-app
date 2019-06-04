import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Movie } from './../movies/movie.model'
import { Storyline } from './storyline/storyline.model'
import { Rating } from './rating.model'
import { Poster } from './poster.model'
import { Filmow_API } from './../app.api'


@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }

    getMovie(id: number): Observable<Movie> {
        return this.http.get<Movie>(`${Filmow_API}/movie/${id}`)
    }

    getStoryline(id: number): Observable<Storyline> {
        return this.http.get<Storyline>(`${Filmow_API}/storyline/${id}`)
    }

    getAvgRating(id: number): Observable<Rating> {
        return this.http.get<Rating>(`${Filmow_API}/avg-rating/${id}`)
    }

    getPoster(id: number): Observable<Poster> {
        return this.http.get<Poster>(`${Filmow_API}/poster/${id}`)
    }
}