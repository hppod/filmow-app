import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { User } from "./../user/user.model"
import { Filmow_API } from "./../app.api"

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient) { }

    register(user: User): Observable<User> {
        return this.http.post<User>(`${Filmow_API}/user`, user)
    }
}