import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http"


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MoviesService } from "./movies/movies.service"
import { MovieService } from "./movie/movie.service";
import { ActorsMovieService } from "./movie/actors/actors.service";
import { ActorsService } from "./actors/actors.service";
import { ReviewsService } from "./movie/reviews/reviews.service"
import { PaginationService } from './components/pagination/pagination.service';
import { ActorService } from "./actor/actor.service"

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [
    MoviesService,
    MovieService,
    ActorsMovieService,
    ActorsService,
    ReviewsService,
    PaginationService,
    ActorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
