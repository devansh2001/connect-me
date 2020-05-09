import React, {Component} from 'react';
import {Card, Row, Col, Image} from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<Container>*/}
                <Card className={'text-left'}>
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
                                        > {this.props.lastMessage}
                                    </Card.Text>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {/*</Container>*/}
            </div>
        );
    }

}

export default Contact;