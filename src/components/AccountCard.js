import React from 'react';  

function AccountCard({ account }) {  
  // Ensure balance has a valid number before attempting to call toFixed  
  const balance = typeof account.balance === 'number' ? account.balance.toFixed(2) : 'N/A';  

  return (  
    <div className="bg-white rounded-lg shadow p-4 mb-4">  
      <div className="flex justify-between items-center mb-2">  
        <h3 className="text-lg font-semibold">{account.bankName}</h3>  
        <span  
          className={`px-2 py-1 rounded-full text-xs ${  
            account.type === 'savings' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'  
          }`}  
        >  
          {account.type}  
        </span>  
      </div>  
      <p className="text-sm text-gray-600 mb-2">{account.accountNumber}</p>  
      <div className="flex justify-between items-center">  
        <span className="text-sm text-gray-600">Current Balance</span>  
        <span className="text-xl font-bold">${balance}</span>  
      </div>  
    </div>  
  );  
}  

export default AccountCard;  