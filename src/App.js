import React, { useState, useEffect } from 'react';
import Board from './components/board';
import './App.css';
import initializeDeck from './deck';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);

    return () => window.removeEventListener('resize', resizeListener);
  });

  const handleClick = id => {
    return setFlipped([...flipped, id]);
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div className="App">
      <h1 className="title">Memory Game</h1>
      <h2 className="subtitle">
        Bisakah kamu mengingat dimana letak kartu tersebut ?
      </h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
