import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApiClient from './apiClient';
import './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import SearchButton from './SearchButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            onChange: null,
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

    handleOnChange = async v => {
        var searchText = v.toLowerCase();
        const messages= await ApiClient.allMessage();

        if (searchText !== ""){
            var filteredMessages = messages.filter(message => message.license_plate.toLowerCase().includes(searchText));
        this.setState({
            messages: filteredMessages,
            onChange: true,
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
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;