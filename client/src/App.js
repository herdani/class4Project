import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApiClient from './apiClient';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import EditMessage from './EditMessage';
import apiClient from './apiClient';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: [],

    }
  }

  componentDidMount = async () => {
    this.refreshList();

  }
  async componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    const message = await apiClient.getMessage(id);
    console.log(message);
    this.setState({
      message
    })
    console.log(message)
  }

  refreshList = async () => {
    const messages = await ApiClient.getMessages();
    this.setState({
      messages

    })
    console.log(messages)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Hello License</h1>
            <p>Send your messages to a plate number easily!</p>
          </header>
          <MessageForm refresher={this.refreshList} />
          {/* <EditMessage edit={this.editList} /> */}


        </div>
        <Switch>
          <Route exact path="/api" render={props => <MessageList messages={this.state.messages} {...props} />} />
          <Route exact path="/api/message/:id" render={props => <EditMessage message={this.state.message} {...props} refresher={this.refreshList} />} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default App;
