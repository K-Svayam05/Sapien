import React, { useState } from 'react';  
import '../styles/PaymentTransfer.css';

function PaymentTransfer() {  
  const [email, setEmail] = useState('');  
  const [accountNumber, setAccountNumber] = useState('');  
  const [amount, setAmount] = useState('');  
  const [note, setNote] = useState('');  

  const handleTransfer = (e) => {  
    e.preventDefault();  
    console.log('Transfer details:', { email, accountNumber, amount, note });  
  };  

  return (  
    <div className="payment-transfer">  
      <h1>Payment Transfer</h1>  
      <p>Please provide any specific details or notes related to the payment transfer.</p>  
      <form onSubmit={handleTransfer}>  
        <div>  
          <label>Select Source Bank:</label>  
          <select>  
            <option>Select Account</option>  
            {/* Add options dynamically based on accounts */}  
          </select>  
        </div>  
        <div>  
          <label>Transfer Note (Optional):</label>  
          <textarea value={note} onChange={(e) => setNote(e.target.value)} />  
        </div>  
        <div>  
          <label>Recipient's Email Address:</label>  
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />  
        </div>  
        <div>  
          <label>Recipient's Bank Account Number:</label>  
          <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />  
        </div>  
        <div>  
          <label>Amount:</label>  
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />  
        </div>  
        <button type="submit">Transfer Funds</button>  
      </form>  
    </div>  
  );  
}  

export default PaymentTransfer;