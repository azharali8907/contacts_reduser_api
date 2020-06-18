import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CountContax from './CountContax'; 

function App() {
 // let [number, setnumber] = useState(12);
    let value = useState(32);
    return (
        <CountContax.Provider value={value}>
      
          <div>
            <Parent></Parent>
            
          </div>
        </CountContax.Provider>
    
    );
}

export default App;
