import React, { useContext } from 'react';
import CountContax from './CountContax';

const Child = () => {
    let value = useContext(CountContax);
    let updatevalue = value[1];
    return( 
        <div>
            child {value[0]}
            <button onClick = {() =>{ updatevalue(++value[0])}}>update value</button>
        </div>

    );
    

}

export default Child;