import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import Contact from "./left-pane/Contact";
import AllContacts from "./left-pane/AllContacts";
import {Row, Col, Container, Button} from 'react-bootstrap';
import socketIOClient from "socket.io-client";

class ChattingWindow extends Component {

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
            currentChatUsername: name
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


    render() {

        // this.socket.on('my_event', () => {
        //     console.log('Event Registered by client');
        // });
        this.socket.on('message_to_client', (info) => {
            console.log(info);
            console.log('message');
        });
        this.socket.on('magic_event', (idx) => {
            console.log("Known: " + this.socket.id);
            console.log("New: " + idx);
        });

        return (
            <div className={'chatting-window'}>
                {/*<Container>*/}
                    <Row>
                        <Col xs={3}>
                            <Button onClick={this.eventSender} value={'Bt'}/>
                            <p>{this.state.username.name}</p>
                            <AllContacts currentChateeChangeHandler={this.updateCurrentChat}/>
                        </Col>
                        <Col xs={9}>
                            {/* insert the current user info component from issue 21 here*/}
                            {/* insert the recent chats component from issue 22 here*/}
                            <TypeMessageBox sendMessageHandler={this.updateMessageInfo}/>
                        </Col>
                    </Row>
                {/*</Container>*/}
            </div>
        )
    }
}

export default ChattingWindow;