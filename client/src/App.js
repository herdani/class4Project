<<<<<<< HEAD
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Message from './Message';
import MessageForm from './MessageForm'


=======
import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ApiClient from './apiClient';
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';


<<<<<<< HEAD

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
=======
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        messages: []  
      }
  }

  componentDidMount = async () => {
    const messages = await ApiClient.getMessages();
    this.setState({
        messages
      });
  }

  onSubmit = async () =>  {
    const messages = await ApiClient.getMessages();
    this.setState({
        messages
    })
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Hello License</h1>
            <p>Send your messages to a plate number easily!</p>
          </header>
          <MessageForm refresher = {this.onSubmit}/>
        </div>
        <Switch>
          <Route exact path="/api"  render ={props => <MessageList messages={this.state.messages} {...props}/> }/>      
        </Switch>
      </BrowserRouter>   
    )
  }
};
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7

export default App;
