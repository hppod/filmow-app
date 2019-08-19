import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Credentials } from "./credentials.model"
import { Filmow_API } from "./../app.api"

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(credentials: Credentials): Observable<Credentials> {
        return this.http.post<Credentials>(`${Filmow_API}/login`, credentials)
    }
}