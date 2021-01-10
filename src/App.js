import React, {useState, useEffect} from 'react';
import Board from './components/board';
import './App.css';
import initializeDeck from './deck';

function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    setCards(initializeDeck());
  },[])

  const handleClick = (id) => {
    return setFlipped([...flipped, id]);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2>Bisakah kamu mengingat dimana letak kartu tersebut ?</h2>
      <Board 
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
