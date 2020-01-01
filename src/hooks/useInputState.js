import {useState} from 'react';
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
}

//example usage
// const [age, handleAgeChange, resetAge] = useFormState("");