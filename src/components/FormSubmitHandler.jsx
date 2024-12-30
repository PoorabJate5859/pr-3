import  { useState } from 'react';

const FormSubmitHandler = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted with: ${inputValue} `);
    setInputValue('');
  };

  return (
    <div>
      <h3>Form Submit Handler</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmitHandler;
