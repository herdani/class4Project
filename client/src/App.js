<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApiClient from './ApiClient';
=======
import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ApiClient from './apiClient';
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

<<<<<<< HEAD
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
=======

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        messages: []
      }
  }

  componentDidMount = async () => {
    this.refreshList();
  }

  refreshList = async () =>  {
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
          <MessageForm refresher = {this.refreshList}/>
        </div>
        <Switch>
          <Route exact path="/api"  render ={props => <MessageList messages={this.state.messages} {...props}/> }/>
        </Switch>
      </BrowserRouter>
    )
  }
};
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8

export default App;