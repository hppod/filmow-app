import { Routes } from '@angular/router';
import { HomeComponent } from './../../home/home.component'
import { MoviesComponent } from './../../movies/movies.component'
import { MovieComponent } from './../../movie/movie.component'
import { StorylineComponent } from './../../movie/storyline/storyline.component'
import { ActorsMovieComponent } from '../../movie/actors/actors-movie.component'
import { ReviewsComponent } from './../../movie/reviews/reviews.component'
import { RegisterComponent } from "./../../register/register.component"
import { ActorsComponent } from "./../../actors/actors.component"
import { ActorComponent } from "./../../actor/actor.component"
import { SearchResultComponent } from "./../../search-result/search-result.component"
import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    {
        path: 'movie/:id', component: MovieComponent, children: [
            { path: '', redirectTo: 'storyline', pathMatch: 'full' },
            { path: 'storyline', component: StorylineComponent },
            { path: 'actors', component: ActorsMovieComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    },
    { path: 'actors', component: ActorsComponent },
    { path: 'actor/:id', component: ActorComponent },
    { path: 'search/:find', component: SearchResultComponent },
    { path: 'signin', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
