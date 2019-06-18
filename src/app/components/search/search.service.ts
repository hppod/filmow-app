import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from "./../../app.api"
import { Movie } from "./../../movies/movie.model"
import { PaginationService } from "./../pagination/pagination.service"

@Injectable()
export class SearchService {

    searchTerm: string
    searchMovieResults: Movie[]
    count: number

    constructor(private http: HttpClient, private ps: PaginationService) { }

    getSearch(searchTerm: string): Observable<any[]> {
        const page = this.ps.currentPage
        return this.http.get<any[]>(`${Filmow_API}/movies/${searchTerm}`)
    }
}