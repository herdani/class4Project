import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Message from './Message';
import MessageForm from './MessageForm'


import './App.css';



function App() {
    return (
        <BrowserRouter>
            <div>
                    <Switch>
                        <Route exact path="/api" component={Message}/>
                        <Route exact path="/api/messages/add" component={MessageForm}/>
                    </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
