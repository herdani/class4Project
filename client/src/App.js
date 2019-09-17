import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import MessageForm from './MessageForm';
import './App.css';
import Messages from './Messages';

function App() {
    return (
        <div>
            <Nav />
            <MessageForm />
            <Messages />
        </div>
    );
}

export default App;
