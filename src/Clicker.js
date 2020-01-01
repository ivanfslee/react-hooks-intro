// useEffect - is a combination of class lifecycle methods - componentDidMount/componentDidUpdate/componentWillUnmount
// by default - it will run after every render (including the first render)
// good for api requests/writing to a database/manipulate DOM

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