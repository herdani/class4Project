import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageForm from './MessageForm';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        This is where you can send a message to a license plate
        </p>
      </header>
      <MessageForm />
    </div>
  );
}

export default App;
