import React from 'react';  
import { mockAccounts } from '../mockData'; // Assuming you have mock data for accounts  
import '../styles/MyBanks.css'; // Create this CSS file for styling  

function MyBanks() {  
  return (  
    <div className="my-banks">  
      <h1>My Bank Accounts</h1>  
      <p>Effortlessly Manage Your Banking Activities.</p>  
      <div className="bank-cards">  
        {mockAccounts.map(account => (  
          <div className="bank-card" key={account.id}>  
            <h2>{account.name}</h2>  
            <p>Spending this month: ${account.spending}</p>  
            <div className="progress-bar">  
              <div className="progress" style={{ width: `${(account.spending / account.limit) * 100}%` }}></div>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  

export default MyBanks;  