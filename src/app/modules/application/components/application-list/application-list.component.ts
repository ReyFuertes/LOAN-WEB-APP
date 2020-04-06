import { Component, OnInit } from '@angular/core';

export interface Application {
  id: number;
  dateApplied: string;
  borrowerName: string;
  loanAmount: string;
  paymentTerm: string;
  coMaker: string;
  status: string;
}

const ELEMENT_DATA: Application[] = [
  {
    id: 1,
    dateApplied: '03/26/2020',
    borrowerName: 'Borrower 1',
    loanAmount: '10,000',
    paymentTerm: 'Monthly',
    coMaker: 'Co Maker 1',
    status: 'New'
  },
  {
    id: 1,
    dateApplied: '03/26/2020',
    borrowerName: 'Borrower 2',
    loanAmount: '10,000',
    paymentTerm: 'Monthly',
    coMaker: 'Co Maker 2',
    status: 'Approved'
  },
  {
    id: 1,
    dateApplied: '03/26/2020',
    borrowerName: 'Borrower 3',
    loanAmount: '10,000',
    paymentTerm: 'Monthly',
    coMaker: 'Co Maker 3',
    status: 'New'
  },
  {
    id: 1,
    dateApplied: '03/26/2020',
    borrowerName: 'Borrower 4',
    loanAmount: '10,000',
    paymentTerm: 'Monthly',
    coMaker: 'Co Maker 4',
    status: 'New'
  },
  {
    id: 1,
    dateApplied: '03/26/2020',
    borrowerName: 'Borrower 5',
    loanAmount: '10,000',
    paymentTerm: 'daily',
    coMaker: 'Co Maker 5',
    status: 'Approved'
  },
];

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {
  public displayedColumns: string[] = ['dateApplied', 'borrowerName', 'loanAmount', 'paymentTerm', 'coMaker', 'status', 'action'];
  public dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
