import React, {Component} from 'react';
import {Container, Col, Image, Row} from 'react-bootstrap';
import devanshPhoto from "./../ProfilePhotos/devanshPhoto.png";
import prernaPhoto from "./../ProfilePhotos/prernaPhoto.png";
import vatsalPhoto from "./../ProfilePhotos/vatsalPhoto.png";
import varunPhoto from "./../ProfilePhotos/varunPhoto.png";
import burdellPhoto from "./../ProfilePhotos/burdellPhoto.png";

class CurrentChatuser extends Component {
    render() {
        const userName= this.props.currentChatUsername;
        let fullName = "";
        let photo = {devanshPhoto}
        switch(userName) {
            case "dponda":
                fullName = "Devansh Ponda"
                photo = devanshPhoto
                break;
            case "vtrivedi":
                fullName = "Vatsal Trivedi"
                photo = vatsalPhoto
                break;
            case "vkulkarni":
                fullName = "Varun Kulkarni"
                photo = varunPhoto
                break;
            case "pravi":
                fullName = "Prerna Ravi"
                photo = prernaPhoto
                break;
            case "THWG":
                fullName = "George P Burdell"
                photo = burdellPhoto
                break;
            default: 
                fullName = "User's Full Name Here"
                photo = devanshPhoto
        }
        return (
            <Container className={'current-chat-user'} >
                <Row>
                <Col xs={1} >
                            <Image className={'contact-image-current'} roundedCircle src={photo} fluid />
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