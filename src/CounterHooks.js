import React, { useState } from 'react';

function CounterHooks() {
    const [count, setCount] = useState(0);
    //useState hook returns an array with two things 
    // 1. piece of state 
    // 2. function to update that piece of state
    // count is a reference to the current value of the count state
    // useState(0) is setting initial state value to, 0
    // setCount is the function that sets the state value of count 
    // setCount(2); // this would set count state to be 2 

    return (
        <div>
            <h1>The Count Is: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        </div>
    );
}

export default CounterHooks;