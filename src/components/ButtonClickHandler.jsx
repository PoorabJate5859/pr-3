import 'react';

const ButtonClickHandler = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <h3>Button Click Handler</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonClickHandler;
