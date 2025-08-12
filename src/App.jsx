import './app.css';
import Card from './Card';
import Score from './Score';

import { useState, useEffect } from 'react';

const baseURL = 'https://rickandmortyapi.com/api/character';
let ids = [1, 2, 3, 4, 5, 7, 17, 20, 26, 28, 29, 47];

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    function handleRecord() {
      if (score >= record) setRecord(score);
    } 
    handleRecord();
  }, [score]);

  useEffect(() => {
    if (gameOver) {
      setScore(0);
      setGameOver(false);
    }
  }, [gameOver]);

  function handleGameOver() {
    setGameOver(true);
  }

  function shuffle() {
    const idsCopy = [...ids];
    const tempArray = [];

    for (let i = 1; i <= ids.length; i++) {
      const index = Math.floor(Math.random() * idsCopy.length - 1);
      const id = idsCopy.splice(index, 1)[0];
      tempArray.push(id);
    };

    ids = tempArray;
  };

  return (
    <>
      <div className='game-container'>
        <header className="header">
          <h1>Rick And Morty Memory Game</h1>
          <Score score={score} record={record} />
        </header>
        <main className='card-container'>
          {ids.map((id) => (
            <Card key={id} URL={`${baseURL}/${id}`} handleGameOver={handleGameOver} setScore={setScore} shuffle={shuffle} gameOver={gameOver} />
          ))}
        </main>
      </div>
    </>
  )
}

export default App;
