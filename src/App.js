import React, {useState} from 'react';
import Card from './components/card';
import './App.css';

function App() {
  const [flipped, setFlipped] = useState([]);

  const handleClick = (id) => {
    return setFlipped([...flipped, id]);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2>Bisakah kamu mengingat dimana letak kartu tersebut ?</h2>
      <Card 
        id={1}
        width={100}
        height={100}
        back={'/img/deck_belakang.png'}
        front={'/img/flashdrive.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}

export default App;
