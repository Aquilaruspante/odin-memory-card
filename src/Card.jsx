import { useState, useEffect } from 'react';
import './card.css';

export default function Card({ URL, handleGameOver, setScore, shuffle, gameOver }) {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(undefined);

    function handleClick(e) {
        console.log('here');
        if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
            e.currentTarget.blur();
            if (clicked) {
                handleGameOver();
            } else {
                setClicked(true);
                setScore(prev => prev < 11 ? prev + 1 : handleGameOver());
                shuffle();
            };
        };
    };

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
    }, [gameOver]);

    return (
        data ? 
        <div className='card' onClick={handleClick} onKeyDown={handleClick} tabIndex={0}>
            <img className='picture' src={data.image} alt="picture" aria-hidden="true" />
            <h3 className="name" aria-label={`card ${data.name}`}>{data.name}</h3>
        </div>
        : 
        <div className='loading-message'>Loading...</div>
    )
}