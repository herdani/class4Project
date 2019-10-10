import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiClient from './apiClient';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import SearchButton from './SearchButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            onChange: false,
            comments: [],
        };
    }

    componentDidMount = async () => {
        this.refreshList();
    };

    refreshList = async () => {
        const messages = await apiClient.getMessages();
       const comments = await apiClient.getComments()
        this.setState({
            messages,
            comments,
        });
    };

    handleDelete = async id => {
        await apiClient.deleteMessage(id);
        this.refreshList();
    };

    handleOnChange = async v => {
        var searchText = v.toLowerCase();
        const messages= await apiClient.allMessage();

        if (searchText !== ""){
            var filteredMessages = messages.filter(message => message.license_plate.toLowerCase().includes(searchText));
        this.setState({
            messages: filteredMessages,
            onChange: !this.state.onChange,
        });

        }else{
            this.refreshList();
        }
        
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>Hello License</h1>
                        <p>Send your messages to a plate number easily!</p>
                    </header>
                    <MessageForm refreshList={this.refreshList} />
                    <SearchButton onChangeClick={this.handleOnChange}/>
                </div>
                <Switch>
                    <Route
                        path="/"
                        render={props => (
                            <MessageList
                                messages={this.state.messages}
                                {...props}
                                handleDelete={this.handleDelete}
                                changing= {this.state.onChange}
                                refreshList={this.refreshList}
                                comments={this.state.comments}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;