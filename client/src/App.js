import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import MessageForm from './MessageForm';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Hello License</h1>
          <p>Send your messages to a plate number easily!</p>
        </header>
        <MessageForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
