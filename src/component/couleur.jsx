import { useState } from 'react';

function Couleur({ initialColor = '#FFFFFF', colorOptions = [] }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    if (colorOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      setColor(colorOptions[randomIndex]);
    } else {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          marginBottom: '10px',
        }}
      ></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
}

export default Couleur;