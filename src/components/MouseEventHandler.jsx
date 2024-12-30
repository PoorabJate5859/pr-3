import  { useState } from 'react';

const MouseEventHandler = () => {
  const [hoverMessage, setHoverMessage] = useState('Hover over the box!');

  const handleMouseOver = () => {
    setHoverMessage('Mouse is Over!');
  };

  const handleMouseOut = () => {
    setHoverMessage('Hover over the box!');
  };

  return (
    <div>
      <h3>Mouse Event Handler</h3>
      <div
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'black',
          textAlign: 'center',
          lineHeight: '100px',
          margin: 'auto',
          border: '1px solid black',
          borderRadius: '12px'
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hoverMessage}
      </div>
    </div>
  );
};

export default MouseEventHandler;
