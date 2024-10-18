// src/components/TransactionHistory.js  
import React from 'react';  
import { mockTransactions } from '../mockData'; // Assuming you have mock data for transactions  
import '../styles/TransactionHistory.css'; // Create this CSS file for styling  

function TransactionHistory() {  
  return (  
    <div className="transaction-history">  
      <h1>Transaction History</h1>  
      <p>Gain insights and track your transactions over time.</p>  
      <div className="account-info">  
        <h2>Chase</h2>  
        <p>Chase Growth Savings Account</p>  
        <p>Current Balance: $41,382.80</p>  
      </div>  
      <table>  
        <thead>  
          <tr>  
            <th>Transaction</th>  
            <th>Amount</th>  
            <th>Status</th>  
            <th>Date</th>  
            <th>Category</th>  
          </tr>  
        </thead>  
        <tbody>  
          {mockTransactions.map(transaction => (  
            <tr key={transaction.id}>  
              <td>{transaction.name}</td>  
              <td>${transaction.amount}</td>  
              <td>{transaction.status}</td>  
              <td>{transaction.date}</td>  
              <td>{transaction.category}</td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  
    </div>  
  );  
}  

export default TransactionHistory;