import { Injectable, Output, EventEmitter } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { MoviesService } from "./../movies/movies.service"
import { PaginationService } from "./pagination/pagination.service"
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Injectable()
export class SearchService {

    constructor(private http: HttpClient, private ms: MoviesService, private ps: PaginationService, private fb: FormBuilder) { }

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