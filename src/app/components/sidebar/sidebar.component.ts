import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

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

  constructor(private r: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  showSearch() {
    const allowRoutes = ['/movies', '/actors']
    const url = this.r.url

    if (url == allowRoutes[0] || url == allowRoutes[1]) {
      return true
    }
    return false
  }
}
