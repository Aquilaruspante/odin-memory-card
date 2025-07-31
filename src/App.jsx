import './App.css';
import Card from './Card';

const baseURL = 'https://rickandmortyapi.com/api/character';
const ids = [1, 2, 3, 4, 5, 7, 13, 17, 20, 26, 28, 29, 47, 58];

function App() {

  return (
    <>
      <Card URL={`${baseURL}/${ids[8]}`} />
    </>
  )
}

export default App;
