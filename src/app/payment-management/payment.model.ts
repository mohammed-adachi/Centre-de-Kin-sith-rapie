// src/app/models/payment.model.ts

export interface Payment {
    id: number;
    amount: number;  // Montant du paiement
    date: Date;      // Date du paiement
    method: string;  // Méthode de paiement (Carte, PayPal, etc.)
    status: string;  // Statut du paiement (succès, échec)
  }
  
  export interface Transaction {
    id: number;
    paymentId: number;  // ID du paiement associé
    transactionDate: Date; // Date de la transaction
    description: string; // Description de la transaction
    status: string;      // Statut de la transaction (terminée, en attente, échouée)
  }
  