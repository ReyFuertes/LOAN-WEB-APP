import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public svgPath: string = environment.svgPath;
  public imgPath: string = environment.imgPath;
  public toolbarMenu: Array<{ label: string, route?: string }> = [
    {
      label: 'DASHBOARD',
      route: '/dashboard',
    },
    {
      label: 'BORROWERS',
      route: '/borrower',
    },
    {
      label: 'APPLICATION',
      route: '/application',
    },
    {
      label: 'LOAN',
      route: '/loan',
    },
    {
      label: 'COLLECTIBLES',
      route: '/collectible',
    },
    {
      label: 'COLLECTIONS',
      route: '/collection',
    },
    {
      label: 'REPORTS',
      route: '/report',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
