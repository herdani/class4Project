<<<<<<< HEAD
import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import apiClient from './apiClient';
=======
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApiClient from './apiClient';
>>>>>>> ff7064e713a999216bc78b260d6a6b9a5ae26239
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentDidMount = async () => {
        this.refreshList();
    };

    refreshList = async () => {
        const messages = await ApiClient.getMessages();
        this.setState({
            messages,
        });
    };

<<<<<<< HEAD
  refreshList = async () =>  {
    const messages = await apiClient.getMessages();
    this.setState({
        messages
    })
  }
  
  handleDelete =  (id) => {
    
   apiClient.deleteMessage(id);
   this.refreshList();
   console.log(id);
   
    
};

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Hello License</h1>
            <p>Send your messages to a plate number easily!</p>
          </header>
          <MessageForm refreshList = {this.refreshList}/>
        </div>
        <Switch>
          <Route exact path="/api"  render ={props => <MessageList handleDelete={this.handleDelete} refreshList = {this.refreshList} messages={this.state.messages} {...props}/> }/>
        </Switch>
      </BrowserRouter>
    )
  }
};
=======
    handleDelete = async id => {
        await ApiClient.deleteMessage(id);
        this.refreshList();
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>Hello License</h1>
                        <p>Send your messages to a plate number easily!</p>
                    </header>
                    <MessageForm refresher={this.refreshList} />
                </div>
                <Switch>
                    <Route
                        path="/"
                        render={props => (
                            <MessageList
                                messages={this.state.messages}
                                {...props}
                                handleDelete={this.handleDelete}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}
>>>>>>> ff7064e713a999216bc78b260d6a6b9a5ae26239

export default App;