import React, {Component} from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';

class CurrentChatuser extends Component {
    render() {
        const userName= this.props.currentChatUsername;
        let fullName= "";
        switch(userName) {
            case "dponda":
                fullName = "Devansh Ponda"
                break;
            case "vtrivedi":
                fullName = "Vatsal Trivedi"
                break;
            case "vkulkarni":
                fullName = "Varun Kulkarni"
                break;
            case "pravi":
                fullName = "Prerna Ravi"
                break;
            case "THWG":
                fullName = "George P Burdell"
                break;
            default: 
                fullName = "User's Full Name Here"
        }
        return (
            <Container className={'current-chat-user'} >
                <Row>
                <Col xs={1} >
                            <Image className={'contact-image-current'} roundedCircle src="https://president.gatech.edu/sites/default/files/images/cabrera-headshot.jpg" fluid />
                </Col>
                <Col >
                    <h4 className={'current-user-header'}>{fullName} ({userName})</h4>
                </Col>
                </Row>
            </Container>
        );
    }
}
export default CurrentChatuser;