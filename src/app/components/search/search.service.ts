import { Actor } from './../../movie/actors/actor.model';
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from "./../../app.api"
import { Movie } from "./../../movies/movie.model"

@Injectable()
export class SearchService {

    searchTerm: string
    searchMovieResults: Movie[]
    searchActorResults: Actor[]
    urlOrigin: string
    count: number
    pages: number

    constructor(private http: HttpClient) { }

    getSearch(route: string, page: number, searchTerm: string): Observable<any[]> {
        if (route == '/home' || route == '/movies') {
            return this.http.get<Movie[]>(`${Filmow_API}/movies/${page}/${searchTerm}`)
        } else {
            return this.http.get<Actor[]>(`${Filmow_API}/actors/${page}/${searchTerm}`)
        }
    }
}