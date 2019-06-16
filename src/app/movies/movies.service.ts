import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from './../app.api';
import { Movie } from './movie.model';
import { PaginationService } from "./../components/pagination/pagination.service"

@Injectable()
export class MoviesService {

    params: HttpParams = new HttpParams()

    constructor(private http: HttpClient, private ps: PaginationService) { }

    getInfoMovies(page: number, column: string, order: string): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${Filmow_API}/movies/${page}/${column}/${order}/`, { params: this.params })
    }

    getGenres(): Observable<any[]> {
        return this.http.get<any[]>(`${Filmow_API}/genres`)
    }
}