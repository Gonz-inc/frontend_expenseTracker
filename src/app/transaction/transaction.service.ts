import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: number;
  descr: string;
  amount: number;
  date: string;   //This might fail because of its formate (string expected)
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://localhost:8080/api/transaction';
  
  constructor(private http: HttpClient) {}
  
  // Creates a new transaction, as all object need a contructor and creation. 
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  // Gets Transaction by id 
  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>('${this.baseUrl}/${id}');
  }

  // Gets all Transactions.
  getTransactions():  Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  // Get Transaction by description. 
  getTransactionByDescription(descr: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/descr/${descr}`);
  }

  // Get Transaction by amount.
  getTransactionByAmount(amount: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/amount/${amount}`);
  }

  // Get Transaction by date.
  getTransactionByDate(date: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/date/${date}`);
  }

  // Delete Transaction by ID. 
  deleteTransactionById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
