import { Component, OnInit } from '@angular/core';

export interface Borrower {
  id: number;
  loanNo: string;
  borrower: string;
  loanDate: string;
  collector: string;
  area: string;
  paymentTerm: string;
  principalAmount: string;
  outstandingCapital: string;
  outstandingBalance: string;
  accruedInterest: string;
  interestEarned: string;
  status: string;
}

const ELEMENT_DATA: Borrower[] = [
  {
    id: 1,
    loanNo: '000001',
    borrower: 'Borrower 1',
    loanDate: '03/25/2020',
    collector: 'Collector 1',
    area: 'Area A',
    paymentTerm: 'Daily',
    principalAmount: '10,000.00',
    outstandingCapital: '10,000.00',
    outstandingBalance: '9,000.00',
    accruedInterest: '900.00',
    interestEarned: '100.00',
    status: 'Approved',
  },
  {
    id: 2,
    loanNo: '000002',
    borrower: 'Borrower 2',
    loanDate: '03/25/2020',
    collector: 'Collector 2',
    area: 'Area B',
    paymentTerm: 'Daily',
    principalAmount: '10,000.00',
    outstandingCapital: '10,000.00',
    outstandingBalance: '9,000.00',
    accruedInterest: '900.00',
    interestEarned: '100.00',
    status: 'Approved',
  },
  {
    id: 3,
    loanNo: '000003',
    borrower: 'Borrower 3',
    loanDate: '03/25/2020',
    collector: 'Collector 1',
    area: 'Area A',
    paymentTerm: 'Daily',
    principalAmount: '10,000.00',
    outstandingCapital: '10,000.00',
    outstandingBalance: '9,000.00',
    accruedInterest: '900.00',
    interestEarned: '100.00',
    status: 'Approved',
  },
  {
    id: 4,
    loanNo: '000004',
    borrower: 'Borrower 4',
    loanDate: '03/25/2020',
    collector: 'Collector 2',
    area: 'Area B',
    paymentTerm: 'Daily',
    principalAmount: '10,000.00',
    outstandingCapital: '10,000.00',
    outstandingBalance: '9,000.00',
    accruedInterest: '900.00',
    interestEarned: '100.00',
    status: 'Approved',
  },
  {
    id: 5,
    loanNo: '000005',
    borrower: 'Borrower 5',
    loanDate: '03/25/2020',
    collector: 'Collector 1',
    area: 'Area A',
    paymentTerm: 'Daily',
    principalAmount: '10,000.00',
    outstandingCapital: '10,000.00',
    outstandingBalance: '9,000.00',
    accruedInterest: '900.00',
    interestEarned: '100.00',
    status: 'Approved',
  },
];

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  public displayedColumns: string[] = ['loanNo', 'borrower', 'loanDate', 'collector', 'area',
                                       'paymentTerm', 'principalAmount', 'outstandingCapital', 'outstandingBalance',
                                       'accruedInterest', 'interestEarned', 'status', 'action'];
  public dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
