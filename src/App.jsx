import './app.css';
import Card from './Card';
import Score from './Score';

import { useState, useEffect } from 'react';

const baseURL = 'https://rickandmortyapi.com/api/character';
const ids = [1, 2, 3, 4, 5, 7, 17, 20, 26, 28, 29, 47];

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  console.log('gameover', gameOver);

  useEffect(() => {
    function handleRecord() {
    if (score >= record) setRecord(score);
    } 
    handleRecord();
  }, [score]);

  function handleGameOver() {
    setGameOver(true);
  }

  return (
    <>
      <div className='game-container'>
        <div className="header">
          <h1>Rick And Morty Memory Game</h1>
          <Score score={score} record={record} />
        </div>
        <div className='card-container'>
          {ids.map((id) => (
            <Card key={id} URL={`${baseURL}/${id}`} handleGameOver={handleGameOver} setScore={setScore} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
