import React from 'react';  

function ChildComponent({ setActiveTab }) {  
  const handleClick = () => {  
    // You might want to set it to a specific tab  
    setActiveTab('tab2'); // Ensure this is a function  
  };  

  return (  
    <button onClick={handleClick}>Switch Tab</button>  
  );  
}  

export default ChildComponent;
console.log(setActiveTab);