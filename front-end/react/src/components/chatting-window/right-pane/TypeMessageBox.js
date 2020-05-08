import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';


class TypeMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
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
            message: ''
        });
        console.log(string);
    };

    handleChange = (e) => {
        let currMessage = e.target.value;
        this.setState({
            message: currMessage
        });
    };

    render() {
        return (
            <div className={'type-message-box'}>
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
                            <Button onClick={this.handleSubmit} variant={'primary'}>Send</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default TypeMessageBox;