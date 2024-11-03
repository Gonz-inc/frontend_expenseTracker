import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from './transaction.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  providers: [TransactionService],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {
  title = 'expenseTracker';
  transactions: Transaction[] = [];
  newTransaction: Transaction = {id: 0, descr: '', amount: 0, date: ''};

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.fetchAllTransactions();
  }

  // Creates the fetchAllTransactions in the file. Note this method was used in the constructor.
  fetchAllTransactions(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  // Deletes a transactions by ID.
  // TODO: this is note really needed so we will need to get rid of this in the future. 
  deleteTransaction(id: number): void{
    this.transactionService.deleteTransactionById(id).subscribe(() =>  {
      this.fetchAllTransactions();
    });
  }
}
