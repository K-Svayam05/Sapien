import React, { useState } from 'react';  
import '../styles/ConnectBank.css';  

const ConnectBank = () => {  
    const [bankName, setBankName] = useState('');  
    const [accountNumber, setAccountNumber] = useState('');  
    const [routingNumber, setRoutingNumber] = useState('');  
    const [successMessage, setSuccessMessage] = useState('');  
    const [errorMessage, setErrorMessage] = useState('');  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (!bankName || !accountNumber || !routingNumber) {  
            setErrorMessage('All fields are required.');  
            return;  
        }  
        setSuccessMessage('Bank account connected successfully!');  
        setErrorMessage('');  
        setBankName('');  
        setAccountNumber('');  
        setRoutingNumber('');  
    };  

    return (  
        <div className="connect-bank-container">  
            <h1 className="connect-bank-title">Connect Your Bank Account</h1>  
            <form className="connect-bank-form" onSubmit={handleSubmit}>  
                <div className="form-field">  
                    <label htmlFor="bankName">Bank Name:</label>  
                    <input   
                        type="text"   
                        id="bankName"   
                        value={bankName}  
                        onChange={(e) => setBankName(e.target.value)}   
                        required   
                    />  
                </div>  
                <div className="form-field">  
                    <label htmlFor="accountNumber">Account Number:</label>  
                    <input   
                        type="text"   
                        id="accountNumber"   
                        value={accountNumber}  
                        onChange={(e) => setAccountNumber(e.target.value)}   
                        required   
                    />  
                </div>  
                <div className="form-field">  
                    <label htmlFor="routingNumber">Routing Number:</label>  
                    <input   
                        type="text"   
                        id="routingNumber"   
                        value={routingNumber}  
                        onChange={(e) => setRoutingNumber(e.target.value)}   
                        required   
                    />  
                </div>  
                {errorMessage && <div className="error-message">{errorMessage}</div>}  
                {successMessage && <div className="success-message">{successMessage}</div>}  
                <button type="submit" className="submit-button">Connect Bank</button>  
            </form>  
        </div>  
    );  
};  

export default ConnectBank;  