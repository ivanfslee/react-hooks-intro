// useEffect - is a combination of class lifecycle methods - componentDidMount/componentDidUpdate/componentWillUnmount
// by default - it will run after every render (including the first render). You can control its invocation if you pass a second argument of an array and useEffect will only run if that argument changes
// good for api requests/writing to a database/manipulate DOM/some operation you want to happen when something updates

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://swapi.co/api/films/${number}/`);
            console.log(response);
            setMovie(response.data)
        }
        getData();
    }, [number]); // second argument is optional argument - only if number changes will useEffect run
    
    return (
        <div>
            <h1>Pick A Movie</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    );
}

export default SWMovies;