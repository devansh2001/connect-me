import React, {Component} from 'react';
import {Card, Col} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card className={'text-left'}>
                    <Col>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{this.props.name} (<i>{this.props.username}</i>)</Card.Title>
                            <Card.Text>
                                > {this.props.lastMessage}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Card>
            </div>
        );
    }

}

export default Contact;