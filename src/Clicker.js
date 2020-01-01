// useEffect - is a combination of class lifecycle methods - componentDidMount/componentDidUpdate/componentWillUnmount
// by default - it will run after every render (including the first render). You can control its invocation if you pass a second argument of an array and useEffect will only run if that argument changes// good for api requests/writing to a database/manipulate DOM/some operation you want to happen when something updates

import React, {useState, useEffect} from 'react';

function Clicker() {
    const [count, setCount] = useState(0);

    //useEffect will run after every time setCount runs
    useEffect(() => {
        alert(document.title = `You clicked ${count} times`);
    });

    return (
        <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    );
}

export default Clicker;