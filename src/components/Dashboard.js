import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AccountCard from './AccountCard';
import TransactionList from './TransactionList';
import { mockAccounts, mockTransactions } from '../mockData';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
          <h1 className="text-2xl font-semibold mb-6">Welcome, Svayam</h1>
          <section className="account-summary">
            {mockAccounts.map(account => (
              <AccountCard key={account.id} account={account} />
            ))}
          </section>
          <section className="recent-transactions">
            <h2>Recent Transactions</h2>
            <TransactionList transactions={mockTransactions} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;