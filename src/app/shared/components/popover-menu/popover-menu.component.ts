import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../../../environments/environment';
export interface Menu {
  label: string;
  value: string;
  icon?: string;
  action?: () => void;
}
@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss']
})
export class PopoverMenuComponent implements OnInit {
  public svgPath: string = environment.svgPath;
  @Input()
  public menus: Menu[] = [
    {
      label: 'EDIT',
      value: 'EDIT',
      icon: 'edit-icon-black.svg'
    },
    {
      label: 'DELETE',
      value: 'DELETE',
      icon: 'delete-icon-red.svg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
