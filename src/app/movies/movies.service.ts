import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from './../app.api';
import { Movies } from './movies.model';

@Injectable()
export class MoviesService {

    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Movies[]> {
        return this.http.get<Movies[]>(`${Filmow_API}/movies`)
    }
}