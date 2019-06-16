import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    isHome(route: string) {
        if (route == "/home") {
            return false
        }
        return true
    }

    definePlaceholder(route: string) {
        if (route == "/movies") {
            return "Buscar pelo título"
        } else {
            return "Buscar pelo nome"
        }
    }

}