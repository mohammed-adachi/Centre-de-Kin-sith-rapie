import { Component, OnInit } from "@angular/core";
import { Payment, Transaction } from "./payment.model";

@Component({
  selector: 'app-payment-management',
  standalone : false,
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.css']
})
export class PaymentManagementComponent implements OnInit {
  payments: Payment[] = [];
  transactions: Transaction[] = [];
  newPayment: Payment = { id: 0, amount: 0, date: new Date(), method: '', status: 'pending' };
  newTransaction: Transaction = { id: 0, paymentId: 0, transactionDate: new Date(), description: '', status: 'pending' };

  constructor() { }

  ngOnInit(): void {
    this.loadPayments();
    this.loadTransactions();
  }

  loadPayments() {
    this.payments = [
      { id: 1, amount: 100, date: new Date('2025-01-01'), method: 'Carte', status: 'succès' },
      { id: 2, amount: 50, date: new Date('2025-01-02'), method: 'PayPal', status: 'succès' }
    ];
  }

  loadTransactions() {
    this.transactions = [
      { id: 1, paymentId: 1, transactionDate: new Date('2025-01-01'), description: 'Achat de forfait', status: 'terminée' },
      { id: 2, paymentId: 2, transactionDate: new Date('2025-01-02'), description: 'Achat de machine', status: 'terminée' }
    ];
  }

  // Méthode pour filtrer les transactions par paymentId
  getTransactionsForPayment(paymentId: number): Transaction[] {
    return this.transactions.filter(transaction => transaction.paymentId === paymentId);
  }
  

  addPayment() {
    this.newPayment.id = this.payments.length + 1;
    this.payments.push({ ...this.newPayment });
    this.newPayment = { id: 0, amount: 0, date: new Date(), method: '', status: 'pending' };
  }

  addTransaction(paymentId: number) {
    this.newTransaction.id = this.transactions.length + 1;
    this.newTransaction.paymentId = paymentId;
    this.transactions.push({ ...this.newTransaction });
    this.newTransaction = { id: 0, paymentId: 0, transactionDate: new Date(), description: '', status: 'pending' };
  }

  deletePayment(id: number) {
    this.payments = this.payments.filter(payment => payment.id !== id);
    this.transactions = this.transactions.filter(transaction => transaction.paymentId !== id);
  }

  deleteTransaction(id: number) {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }

  editPayment(payment: Payment) {
    this.newPayment = { ...payment };
  }

  editTransaction(transaction: Transaction) {
    this.newTransaction = { ...transaction };
  }
}
