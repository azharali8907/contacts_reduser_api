import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReduser';


const Child2 = () => {
    let [state, dispath] = useReducer(numberReducer,92);
    return( 
        <div>
            child 2 -- {state}
            <br/>
            <button onClick={()=> {dispath({type:"increment", val:10}); }}>Increament button</button>
            <br/>
            <button onClick={()=> {dispath({type:"decrement", val:5}); }}>Decreament button</button>
        </div>

    );
    

}

export default Child2;