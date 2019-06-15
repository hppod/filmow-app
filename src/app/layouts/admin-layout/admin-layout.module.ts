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
import { ActorsMovieComponent } from '../../movie/actors/actors-movie.component'
import { ReviewsComponent } from './../../movie/reviews/reviews.component'
import { CardMovieComponent } from './../../movies/card-movie/card-movie.component'
import { CardActorComponent } from './../../movie/actors/card-actor/card-actor.component'
import { CardReviewComponent } from './../../movie/reviews/card-review/card-review.component'
import { RatingComponent } from 'app/components/rating/rating.component';
import { InputComponent } from './../../components/input/input.component'
import { PaginationComponent } from './../../components/pagination/pagination.component'
import { RegisterComponent } from "./../../register/register.component"
import { ActorsComponent } from "./../../actors/actors.component"
import { ActorComponent } from "./../../actor/actor.component"

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
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    MoviesComponent,
    MovieComponent,
    StorylineComponent,
    ActorsMovieComponent,
    ReviewsComponent,
    CardMovieComponent,
    CardActorComponent,
    CardReviewComponent,
    RatingComponent,
    InputComponent,
    PaginationComponent,
    RegisterComponent,
    ActorsComponent,
    ActorComponent
  ],
  exports: [
    InputComponent,
    PaginationComponent
  ]
})

export class AdminLayoutModule { }
