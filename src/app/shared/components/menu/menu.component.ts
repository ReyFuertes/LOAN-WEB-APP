import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  @Input()
  public menu: {
    label: string, children?: Array<{
      label: string, route?: string
    }>, route?: string
  };
  constructor() { }

  ngOnInit() {
  }

}
