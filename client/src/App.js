import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';


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
      <Switch>
        <div>
          <Route exact path="/api" component={MessageList}/>
        </div>        
      </Switch>

    </BrowserRouter>
  );
}

export default App;
