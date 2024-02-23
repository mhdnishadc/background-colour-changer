import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <div className="button">
        <button className='red' onClick={() => changeColor('red')}>red</button>
        <button className='green' onClick={() => changeColor('green')}>green</button>
        <button className='yellow' onClick={() => changeColor('yellow')}>yellow</button>
        <button className='blue' onClick={() => changeColor('blue')}>blue</button>
      </div>
    </div>
  );
}

export default App;

