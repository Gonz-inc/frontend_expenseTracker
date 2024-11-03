import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionService, Transaction} from './transaction/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, NgFor, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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

  // Deletes a transactions by ID 
  deleteTransaction(id: number): void{
    this.transactionService.deleteTransactionById(id).subscribe(() =>  {
      this.fetchAllTransactions();
    });
  }

  
}
