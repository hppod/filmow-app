import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { HomeComponent } from './../../home/home.component'
import { MoviesComponent } from './../../movies/movies.component'
import { MovieComponent } from './../../movie/movie.component'
import { StorylineComponent } from './../../movie/storyline/storyline.component'
import { ActorsComponent } from './../../movie/actors/actors.component'
import { ReviewsComponent } from './../../movie/reviews/reviews.component'
import { CardMovieComponent } from './../../movies/card-movie/card-movie.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    StorylineComponent,
    ActorsComponent,
    ReviewsComponent,
    CardMovieComponent
  ]
})

export class AdminLayoutModule { }
