import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service"
import { Movie } from "./../movies/movie.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inTheatersMovies: Movie[] = []
 
  comingSoonMovies: Movie[] = []

  constructor(private hs: HomeService) { }

  ngOnInit() {
        
    this.hs.getMoviesInTheaters().subscribe((response) => {
      this.inTheatersMovies = response
    })

    this.hs.getMoviesComingSoon().subscribe((response) => {
      this.comingSoonMovies = response
    })

  }

}
