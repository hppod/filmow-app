import { Routes } from '@angular/router';
import { HomeComponent } from './../../home/home.component'
import { MoviesComponent } from './../../movies/movies.component'
import { MovieComponent } from './../../movie/movie.component'
import { StorylineComponent } from './../../movie/storyline/storyline.component'

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    {
        path: 'movie/:id', component: MovieComponent, children: [
            { path: '', redirectTo: 'storyline', pathMatch: 'full' },
            { path: 'storyline', component: StorylineComponent }
        ]
    }
];
