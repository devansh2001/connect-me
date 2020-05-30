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
            temp: {
                'data': name
            }
        };
        this.socket = socketIOClient(this.state.endpoint, {
            'query': this.state.temp
        });
        console.log(this.state.temp.data);
    }

    eventSender = () => {
        console.log('Button pressed');

        // const socket = socketIOClient(this.state.endpoint, {
        //     'query': this.state.temp
        // });

        this.socket.emit('my_event');
    };


    render() {

        // const socket = socketIOClient(this.state.endpoint, {
        //     'query': this.state.temp
        // });
        this.socket.on('my_event', () => {
            console.log('Event Registered by client');
        });
        this.socket.on('Yo wassup', (idx) => {
            console.log("Known: " + this.socket.id);
            console.log("New: " + idx);
            console.log('GOTCHA');
        });
        this.socket.on('hey', () => {
            console.log('PLZ work');
        });
        this.socket.on('I just met you', () => {
            console.log('PLZ work yaar');
        });

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
                            <TypeMessageBox/>
                        </Col>
                    </Row>
                {/*</Container>*/}
            </div>
        )
    }
}

export default ChattingWindow;