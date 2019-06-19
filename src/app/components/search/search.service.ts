import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from "./../../app.api"
import { Movie } from "./../../movies/movie.model"

@Injectable()
export class SearchService {

    searchTerm: string
    searchMovieResults: Movie[]
    count: number
    pages: number

    constructor(private http: HttpClient) { }

    getSearch(page: number, searchTerm: string): Observable<any[]> {
        return this.http.get<any[]>(`${Filmow_API}/movies/${page}/${searchTerm}`)
    }
}