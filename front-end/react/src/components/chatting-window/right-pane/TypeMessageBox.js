import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';


class TypeMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            isSendDisabled: true
        }
    }

    handleSubmit = (e) => {
        var string = this.state.message;
        string = string.trim();
        this.setState({
            message: string
        });
        // Call API to send the message here

        // Next line flushes the message upon successful sending
        this.setState({
            message: '',
            isSendDisabled: true
        });
        console.log(string);
    };


    handleChange = (e) => {
        let currMessage = e.target.value;
        var shouldDisableSend = this.state.isSendDisabled;
        if (currMessage === '') {
            shouldDisableSend = true;
        } else {
            shouldDisableSend = false;
        }
        this.setState({
            message: currMessage,
            isSendDisabled: shouldDisableSend
        });
    };

    render() {
        return (
            <div className={'fixed-bottom type-message-box'}>
                <Form >
                    <Form.Row>
                        <Col>
                            <Form.Control
                                onChange={this.handleChange}
                                as={"textarea"}
                                placeholder={"Type your message..."}
                                rows={3}
                                value={this.state.message}
                            />
                        </Col>
                        <Col sm={1}>
                            <Button
                                onClick={this.handleSubmit}
                                variant={'primary'}
                                disabled={this.state.isSendDisabled}
                            >
                                Send
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default TypeMessageBox;