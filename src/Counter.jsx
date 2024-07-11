import React, {useState} from 'react';


function Counter(){
    const[count, setCount]= useState(0);
    function handleIncrement(){
        setCount(c => c + 2);
        
    }

    function handleReset(){
        setCount(0);
    }

    function handleDecrement(){
        setCount(c => c - 2);
    }
    return(
        <div className="Counter">
            <div className="counter-display">
        {count}

            </div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;