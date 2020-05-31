import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import Contact from "./left-pane/Contact";
import AllContacts from "./left-pane/AllContacts";
import {Row, Col, Container, Button} from 'react-bootstrap';
import socketIOClient from "socket.io-client";

class ChattingWindow extends Component {

    constructor(props) {
        super(props);
        var name = Math.random() < 0.5 ? 'devanshponda' : 'dwiti';
        this.state = {
            endpoint: 'http://localhost:8080/',
            username: {'name' : name},
            messageInfo: {
                'from': '',
                'to': '',
                'message': ''
            },
            // socket = socketIOClient(this.state.endpoint, {
            //     'query': this.state.username
            // })
        };
        this.socket = socketIOClient(this.state.endpoint, {
            'query': this.state.username
        });
        console.log(this.state.username);
    }

    updateMessageInfo = (message) => {
        console.log('updating message');
        this.setState({
            messageInfo: {
                'message': message['message']
            }
        })
    };

    eventSender = () => {
        console.log('Button pressed');
        var info = {
            'message': 'Hello whats up?',
            'from': 'devanshponda',
            'to': 'dwiti'
        };
        this.socket.emit('message_to_server', info);
    };


    render() {

        this.socket.on('my_event', () => {
            console.log('Event Registered by client');
        });
        this.socket.on('message_to_client', (info) => {
            console.log(info);
            console.log('Got my event 2');
        });
        // this.socket.on('Yo wassup', (idx) => {
        //     console.log("Known: " + this.socket.id);
        //     console.log("New: " + idx);
        //     console.log('GOTCHA');
        // });

        return (
            <div className={'chatting-window'}>
                {/*<Container>*/}
                    <Row>
                        <Col xs={3}>
                            <Button onClick={this.eventSender} value={'Bt'}/>
                            <AllContacts/>
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