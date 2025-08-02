import { useState, useEffect } from 'react';
import './card.css';

export default function Card({ URL, handleGameOver, setScore, shuffle, gameOver }) {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(undefined);

    function handleClick() {
        if (clicked) {
            handleGameOver();
        } else {
            setClicked(true);
            setScore(prev => prev + 1);
            shuffle();
        }
    }

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const json = await response.json();
            setData(json);
            console.log('fetching data...');
        }
        getData();
    }, [URL]);

    useEffect(() => {
        if(gameOver) setClicked(false);
    }, gameOver);

    return (
        data ? 
        <div className='card' onClick={handleClick}>
            <img className='picture' src={data.image} alt="picture" />
            <h3 className="name">{data.name}</h3>
        </div>
        : 
        <div className='loading-message'>Loading...</div>
    )
}