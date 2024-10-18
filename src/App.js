import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from './components/Login';  
import Signup from './components/Signup';  
import Dashboard from './components/Dashboard';  
import MyBanks from './components/MyBanks'; // Importing MyBanks component  
import TransactionHistory from './components/TransactionHistory'; // Importing TransactionHistory component  
import PaymentTransfer from './components/PaymentTransfer'; // Importing PaymentTransfer component  
import ConnectBank from './components/ConnectBank'; // Importing ConnectBank component  

function App() {  
  return (  
    <Router>  
      <div className="App">  
        <Routes>  
          <Route path="/" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/dashboard" element={<Dashboard />} />  
          <Route path="/my-banks" element={<MyBanks />} />  {/* Route for MyBanks */}  
          <Route path="/transaction-history" element={<TransactionHistory />} />  {/* Route for TransactionHistory */}  
          <Route path="/payment-transfer" element={<PaymentTransfer />} />  {/* Route for PaymentTransfer */}  
          <Route path="/connect-bank" element={<ConnectBank />} />  {/* Route for ConnectBank */}  
        </Routes>  
      </div>  
    </Router>  
  );  
}  

export default App;