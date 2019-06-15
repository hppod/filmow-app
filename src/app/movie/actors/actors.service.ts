import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from "./../../app.api"
import { Actor } from "./actor.model"

@Injectable()
export class ActorsMovieService {

    constructor(private http: HttpClient) { }

    getActorsOfMovie(id: number): Observable<Actor[]> {
        return this.http.get<Actor[]>(`${Filmow_API}/movie-actors/${id}`)
    }
}