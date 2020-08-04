import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import CurrentChat from "./right-pane/CurrentChat";
import Contact from "./left-pane/Contact";
import AllContacts from "./left-pane/AllContacts";
import {Row, Col, Container, Button} from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import SearchBar from "./left-pane/SearchBar";
import ConnectMe from "./left-pane/ConnectMe"
import { ChatFeed, Message, ChatBubbleProps } from 'react-chat-ui'
import Login from '../create-user/Login';

class ChattingWindow extends Login {

    constructor(props) {
        super(props);
        const name = Math.random() < 0.5 ? 'dponda' : 'vtrivedi';
        this.state = {
            endpoint: 'http://localhost:8080/',
            username: {'name' : name},
            messageInfo: {
                'from': '',
                'to': '',
                'message': ''
            },
            currentChatUsername: name,
            allMessages: [],
            forceReload: false
            // socket = socketIOClient(this.state.endpoint, {
            //     'query': this.state.username
            // })
        };
        this.socket = socketIOClient(this.state.endpoint, {
            'query': this.state.username
        });
    }

    updateCurrentChat = (updatedChat) => {
        this.setState({
            currentChatUsername: updatedChat
        })
    };

    updateMessageInfo = async (messageObj) => {
        console.log('updating message');
        console.log(messageObj);
        await this.setState({
            messageInfo: {
                'message': messageObj
            }
        });
        await this.eventSender();
        await this.updateAllMessages({
            'message': this.state.messageInfo.message,
            'from': this.state.username.name,
            'to': this.state.currentChatUsername
        });
    };

    eventSender = () => {
        console.log('Button pressed');
        var info = {
            'message': this.state.messageInfo.message,
            'from': this.state.username.name,
            'to': this.state.currentChatUsername
        };
        this.socket.emit('message_to_server', info);
    };

    updateAllMessages = async (message) => {
        let curr = this.state.allMessages;

        let id = 1;
        console.log(message['from']);
        console.log(this.state.username.name);
        if (message['from'] === this.state.username.name) {
            console.log("ACCHA");
            id = 0;
        }

        let formatted = new Message({
            id: id,
            message: message.message
        });

        if (curr[this.state.currentChatUsername]) {
            curr[this.state.currentChatUsername].push(formatted);
        } else {
            curr[this.state.currentChatUsername] = [];
            curr[this.state.currentChatUsername].push(formatted);
        }
        // await curr[this.state.currentChatUsername].push(message);
        let initialForce = this.state.force;
        await this.setState({
            allMessages: curr,
            forceReload: !initialForce
        });
        // await this.formatMessages();
        await console.log(this.state.allMessages);
    };

    render() {
        {/*USE THIS USER NAME FOR CHATTING WINDOW FROM LOG IN*/}
        console.log(this.props.userName)
        // this.socket.on('my_event', () => {
        //     console.log('Event Registered by client');
        // });
        this.socket.on('message_to_client', async (info) => {
            console.log(info);
            console.log('message');
            await this.updateAllMessages(info);
        });
        this.socket.on('magic_event', (idx) => {
            console.log("Known: " + this.socket.id);
            console.log("New: " + idx);
        });

        console.log(this.state.allMessages[this.state.currentChatUsername]);
        return (
            <div className={'chatting-window'}>
                {/*<Container>*/}
                    <Row>
                        <Col xs={3}>
                            <Row >
                                <p>{this.state.username.name}</p>
                                <ConnectMe />
                                <SearchBar/>
                                <AllContacts currentChateeChangeHandler={this.updateCurrentChat}/>
                            </Row>  
                        </Col>
                        <Col xs={9}>
                            {console.log('GOING IN THERE')}
                            {/*console.log("show" + this.props.state.userName)*/} 
                            {/* insert the current user info component from issue 21 here*/}
                            <CurrentChat messages={this.state.allMessages[this.state.currentChatUsername] ?
                                this.state.allMessages[this.state.currentChatUsername] : []}
                                         username={this.state.username}
                                         force={this.state.forceReload}
                            />
                            <hr/>
                            <TypeMessageBox sendMessageHandler={this.updateMessageInfo}/>
                        </Col>
                    </Row>
                {/*</Container>*/}
            </div>
        )
    }
}

export default ChattingWindow;