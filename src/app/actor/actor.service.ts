import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Actor, ActorMovies } from "./../movie/actors/actor.model"
import { Filmow_API } from "./../app.api"

@Injectable()
export class ActorService {

    constructor(private http: HttpClient) { }

    getActorInfo(id: number): Observable<Actor> {
        return this.http.get<Actor>(`${Filmow_API}/actor/${id}`)
    }

    getMoviesOfActor(id: number): Observable<ActorMovies[]> {
        return this.http.get<ActorMovies[]>(`${Filmow_API}/movies-actor/${id}`)
    }
}