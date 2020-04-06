import { Component, OnInit } from '@angular/core';

export interface Borrower {
  id: number;
  name: string;
  contactNo: string;
  spouse: string;
  address: string;
}

const ELEMENT_DATA: Borrower[] = [
  {
    id: 1,
    name: 'Borrower 1',
    contactNo: '09998879111',
    spouse: 'Spouse 1',
    address: 'Address 1'
  },
  {
    id: 2,
    name: 'Borrower 2',
    contactNo: '09998879112',
    spouse: 'Spouse 2',
    address: 'Address 2'
  },
  {
    id: 3,
    name: 'Borrower 3',
    contactNo: '09998879113',
    spouse: 'Spouse 3',
    address: 'Address 3'
  },
  {
    id: 4,
    name: 'Borrower 4',
    contactNo: '09998879114',
    spouse: 'Spouse 4',
    address: 'Address 4'
  },
  {
    id: 5,
    name: 'Borrower 5',
    contactNo: '09998879115',
    spouse: 'Spouse 5',
    address: 'Address 5'
  },
];


@Component({
  selector: 'app-borrower-list',
  templateUrl: './borrower-list.component.html',
  styleUrls: ['./borrower-list.component.scss']
})
export class BorrowerListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'contactNo', 'spouse', 'address', 'action'];
  public dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
