import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AppHeader from './AppHeader';
import MessageForm from './MessageForm';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <MessageForm />
      </div>
    </BrowserRouter>
  );
}

export default App;
