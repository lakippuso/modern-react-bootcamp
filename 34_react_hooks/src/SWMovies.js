import axios from "axios";
import { useState, useEffect } from "react";

export default function SWMovies(){
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('')

    useEffect(() => {
        async function getData () {
            const response = await axios.get(`https://swapi.dev/api/films/${number}`)
            setMovie(response.data);
        }
        getData();
    }, [number]);
    
    return (
        <>
            <h1>{movie.title}</h1>
            <select 
                value={number}
                onChange={e => setNumber(e.target.value)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </>
    );
};