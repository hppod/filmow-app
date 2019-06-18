import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from "./search/search.component";
import { SearchPageComponent } from './search/search-page/search-page.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SearchComponent,
    SearchPageComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
