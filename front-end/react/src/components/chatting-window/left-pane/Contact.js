import React, {Component} from 'react';
import {Card, Row, Col, Image} from 'react-bootstrap';

class Contact extends Component {
    maxAllowableChars = 22;
    constructor(props) {
        super(props);
    }

    formatLastMessageString = (message) => {
        if (message.length > this.maxAllowableChars) {
            return message.substring(0, this.maxAllowableChars) + "..."
        } else {
            return message;
        }
    };

    render() {
        return (
            <div >
                {/*<Container>*/}
                <a style={{ cursor: 'pointer' }}>
                <Card className={'text-left'} >
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className={'contact-image'} roundedCircle src="https://president.gatech.edu/sites/default/files/images/cabrera-headshot.jpg" fluid />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Row>
                                    <Card.Title>{this.props.name} (<i>{this.props.username}</i>)</Card.Title>
                                </Row>
                                <Row>
                                    <Card.Text>
                                        <p className={'contact-last-message'}>
                                            > {this.formatLastMessageString(this.props.lastMessage)}
                                        </p>
                                    </Card.Text>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </a>
                {/*</Container>*/}
            </div>
        );
    }

}

export default Contact;