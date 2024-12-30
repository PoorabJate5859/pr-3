import 'react';
import ButtonClickHandler from './components/ButtonClickHandler';
import FormSubmitHandler from './components/FormSubmitHandler';
import MouseEventHandler from './components/MouseEventHandler';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="set-app">
      <h1>React Event Handlers</h1>
      <ButtonClickHandler />
      <FormSubmitHandler />
      <MouseEventHandler />
    </div>
    </div>
  );
};

export default App;


