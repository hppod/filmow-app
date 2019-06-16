import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from './../app.api';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {

    constructor(private http: HttpClient) { }

    // getInfoMovies(page: number): Observable<Movie[]> {
    //     return this.http.get<Movie[]>(`${Filmow_API}/movies/${page}`)
    // }

    getInfoMovies(page: number, column: string, order: string): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${Filmow_API}/movies/${page}/${column}/${order}`)
    }

    getGenres(): Observable<any[]> {
        return this.http.get<any[]>(`${Filmow_API}/genres`)
    }
}