import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent implements OnInit {
  breadcrumb: string[];

  constructor(
    private readonly _route: Router,
  ) { }

  ngOnInit(): void {
    this._route.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.breadcrumb = this._route.url.split('/');
      }
    });
  }
}
