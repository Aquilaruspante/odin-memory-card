import './app.css';
import Card from './Card';

import backgroudImage from './assets/rick-morty.avif';

const baseURL = 'https://rickandmortyapi.com/api/character';
const ids = [1, 2, 3, 4, 5, 7, 13, 17, 20, 26, 28, 29, 47, 58];

function App() {

  return (
    <>
      <div className='game-container'>
        <div className="header">
        <h1>Rick And Morty Memory Game</h1>
      </div>
        <div className='card-container'>
          {ids.map((id) => (
            <Card key={id} URL={`${baseURL}/${id}`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
