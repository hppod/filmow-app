import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Movie } from "./../movies/movie.model"
import { Filmow_API } from "./../app.api"

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) { }

    getMoviesInTheaters(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${Filmow_API}/movies-intheaters`)
    }
}