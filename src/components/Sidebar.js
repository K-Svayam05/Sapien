import React from 'react';  
import { Link } from 'react-router-dom';  

function Sidebar() {  
  const menuItems = [  
    { icon: '🏠', text: 'Home', path: '/' },                   // Home links to Dashboard  
    { icon: '🏦', text: 'My Banks', path: '/my-banks' },      // My Banks links to MyBanks component  
    { icon: '📜', text: 'Transaction History', path: '/transaction-history' }, // Transaction History links to TransactionHistory component  
    { icon: '💸', text: 'Payment Transfer', path: '/payment-transfer' }, // Payment Transfer links to PaymentTransfer component  
    { icon: '🔗', text: 'Connect Bank', path: '/connect-bank' }, // Connect Bank links to ConnectBank component  
  ];  

  return (  
    <aside className="bg-white w-64 min-h-screen p-4">  
      <h2 className="text-lg font-bold mb-4">Horizon Banking</h2>  
      <nav>  
        <ul>  
          {menuItems.map((item, index) => (  
            <li key={index} className="mb-2">  
              <Link   
                to={item.path}   
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"  
              >  
                <span className="mr-3">{item.icon}</span>  
                <span>{item.text}</span>  
              </Link>  
            </li>  
          ))}  
        </ul>  
      </nav>  
      <button className="w-full mt-6 p-2 text-white bg-red-500 rounded-lg hover:bg-red-600">  
        Logout  
      </button>  
    </aside>  
  );  
}  

export default Sidebar;