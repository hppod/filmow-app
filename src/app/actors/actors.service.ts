import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Filmow_API } from "./../app.api"
import { Actor } from "./../movie/actors/actor.model"

@Injectable()
export class ActorsService {

    constructor(private http: HttpClient) { }

    getInfoActors(page: number, column: string, order: string): Observable<Actor[]> {
        return this.http.get<Actor[]>(`${Filmow_API}/actors/${page}/${column}/${order}`)
    }
}