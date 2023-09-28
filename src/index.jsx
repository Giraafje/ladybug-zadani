import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  // const [posX, setPosX] = useState(100);
  // const [posY, setPosY] = useState(100);
  // const [orientation, setOrientation] = useState('right');

  const [ladybugState, setLadyBugState] = useState({
    posX: 100,
    posY: 100,
    orientation: 'right'
  })
  
  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      // setOrientation('up');
      // setPosX(posX - STEP_SIZE);
      setLadyBugState({...ladybugState, posX: ladybugState.posX - STEP_SIZE, orientation: 'up'})
    } else if (code === 'ArrowLeft') {
      // setOrientation('left');
      // setPosY(posY - STEP_SIZE);
      setLadyBugState({...ladybugState, posY: ladybugState.posY - STEP_SIZE, orientation: 'left'})
    } else if (code === 'ArrowRight') {
      // setOrientation('right');
      // setPosY(posY + STEP_SIZE);
      setLadyBugState({...ladybugState, posY: ladybugState.posY + STEP_SIZE, orientation: 'right'})
    } else if (code === 'ArrowDown') {
      // setOrientation('down');
      // setPosX(posX + STEP_SIZE);
      setLadyBugState({...ladybugState, posX: ladybugState.posX + STEP_SIZE, orientation: 'down'})
    }
  };

  return (
    <div 
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug ladybugState={ladybugState}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
