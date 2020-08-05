import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import CurrentChat from "./right-pane/CurrentChat";
import Contact from "./left-pane/Contact";
import AllContacts from "./left-pane/AllContacts";
import {Row, Col, Container, Button} from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import SearchBar from "./left-pane/SearchBar";
import ConnectMe from "./left-pane/ConnectMe";
import CurrentChatUser from "./right-pane/CurrentChatUser";
import { ChatFeed, Message, ChatBubbleProps } from 'react-chat-ui'
import Login from '../create-user/Login';

const { v4: uuidv4 } = require('uuid');

class ChattingWindow extends Login {
    constructor(props) {
        super(props);
        const name = this.props.userName;
        this.state = {
            endpoint: 'https://connect-me-app.herokuapp.com/',
            username: {'name' : name},
            messageInfo: {
                'uuid': '0',
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
        this.receivedMessagesIds = new Set();
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
        let uuid = uuidv4();
        await this.eventSender(uuid);
        await this.updateAllMessages({
            'uuid': uuid,
            'message': this.state.messageInfo.message,
            'from': this.state.username.name,
            'to': this.state.currentChatUsername
        });
    };

    eventSender = async (uuid) => {
        console.log('Button pressed');
        let info = {
            'uuid': uuid,
            'message': this.state.messageInfo.message,
            'from': this.state.username.name,
            'to': this.state.currentChatUsername
        };
        await this.socket.emit('message_to_server', info);
    };

    updateAllMessages = async (message) => {
        let curr = this.state.allMessages;

        if (this.receivedMessagesIds.has(message.uuid)) {
            return;
        }
        this.receivedMessagesIds.add(message.uuid);
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

        if (id === 1) {
            if (curr[message['from']]) {
                curr[message['from']].push(formatted);
            } else {
                curr[message['from']] = [];
                curr[message['from']].push(formatted);
            }
        } else {
            if (curr[message['to']]) {
                curr[message['to']].push(formatted);
            } else {
                curr[message['to']] = [];
                curr[message['to']].push(formatted);
            }
        }

        console.log(this.state.currentChatUsername);
        console.log(message['to']);

        // if (curr[this.state.currentChatUsername]) {
        //     curr[this.state.currentChatUsername].push(formatted);
        // } else {
        //     curr[this.state.currentChatUsername] = [];
        //     curr[this.state.currentChatUsername].push(formatted);
        // }
        console.log(curr);


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
        console.log(this.props.userName);
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
                            <Row className={'left-pane'}>
                                <ConnectMe />
                                <SearchBar/>
                                <AllContacts currentChateeChangeHandler={this.updateCurrentChat}/>
                            </Row>  
                        </Col>
                        <Col xs={9}>
                            {console.log('GOING IN THERE')}
                            <Row className={'current-user-pane'}>
                                {/*console.log("show" + this.props.state.userName)*/} 
                                    <CurrentChatUser currentChatUsername={this.state.currentChatUsername} 
                                    force={this.state.forceReload}/>
                                
                                <CurrentChat messages={this.state.allMessages[this.state.currentChatUsername] ?
                                    this.state.allMessages[this.state.currentChatUsername] : []}
                                            username={this.state.username}
                                            force={this.state.forceReload}
                                />
                                <TypeMessageBox sendMessageHandler={this.updateMessageInfo}/>
                            </Row>
                           
                        </Col>
                    </Row>
                {/*</Container>*/}
            </div>
        )
    }
}

export default ChattingWindow;