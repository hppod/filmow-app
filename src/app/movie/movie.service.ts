import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Movie } from './../movies/movie.model'
import { Storyline } from './storyline/storyline.model'
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
}