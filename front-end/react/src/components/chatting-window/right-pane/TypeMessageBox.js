import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';


class TypeMessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleSubmit = async (e) => {
        console.log(this.state.message);
    };

    handleChange = (e) => {
        let currMessage = e.target.value;
        this.state = {
            message: currMessage
        }
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
                            />
                        </Col>
                        <Col lg={1}>
                            <Button onClick={this.handleSubmit} variant={'primary'}>Send</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default TypeMessageBox;