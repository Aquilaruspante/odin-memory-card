import { useState, useEffect } from 'react';

export default function Card({ URL }) {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const json = await response.json();
            setData(json);
            console.log(data);
        }
        getData();
    }, [URL]);

    return (
        data ? 
        <div className='card'>
            <img src={data.image} alt="picture" />
            <h3 className="name">{data.name}</h3>
        </div>
        : 
        <div className='loading-message'>Loading...</div>
    )
}