import { useState } from 'react';

function useToggle(initialVal = false) {
    const [toggleState, setToggleState] = useState(initialVal);
    const toggle = () => {
        setToggleState(!toggleState);
    };
    return [toggleState, toggle]; // for second arg - return toggle function rather than setToggleState function 
}

export default useToggle;