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
    
    getInfoMovies(page: number): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${Filmow_API}/movies/${page}`)
    }
}