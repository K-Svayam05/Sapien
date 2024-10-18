import React, { useState } from 'react';  
import ChildComponent from './ChildComponent';  

function ParentComponent() {  
  const [activeTab, setActiveTab] = useState('tab1');  

  return (  
    <div>  
      <ChildComponent setActiveTab={setActiveTab} />  
      {/* Other components or render logic */}  
    </div>  
  );  
}  

export default ParentComponent;