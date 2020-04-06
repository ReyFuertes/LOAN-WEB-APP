import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public svgPath: string = environment.svgPath;
  constructor() { }

  ngOnInit() {
  }

}
