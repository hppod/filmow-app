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
import { ActorsService } from "./movie/actors/actors.service";
import { ReviewsService } from "./movie/reviews/reviews.service"

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
    ActorsService,
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
