import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { SearchService } from "./../search.service"

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home', icon: 'home', class: '' },
  { path: '/movies', title: 'Filmes', icon: 'movies', class: '' },
  { path: '/actors', title: 'Atores', icon: 'star', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private ss: SearchService, private r: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  showSearch() {
    return this.ss.isHome(this.r.url)
  }

  definePlaceholder() {
    return this.ss.definePlaceholder(this.r.url)
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
