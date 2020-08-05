import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import Contact from "./Contact";
import devanshPhoto from "./../ProfilePhotos/devanshPhoto.png";
import prernaPhoto from "./../ProfilePhotos/prernaPhoto.png";
import vatsalPhoto from "./../ProfilePhotos/vatsalPhoto.png";
import varunPhoto from "./../ProfilePhotos/varunPhoto.png";
import burdellPhoto from "./../ProfilePhotos/burdellPhoto.png";


class AllContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'FRIENDS forever <3!',
                    photo: devanshPhoto
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Chai + Quarantine',
                    photo: vatsalPhoto
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: 'Dripping Swagg',
                    photo: varunPhoto
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Sorry I zoned out :(',
                    photo: prernaPhoto
                },
                {
                    name: 'George P Burdell',
                    username: 'THWG',
                    lastMessage: 'Testing if the message is cut if its too long',
                    photo: burdellPhoto
                },
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'FRIENDS forever <3!',
                    photo: devanshPhoto
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Chai + Quarantine',
                    photo: vatsalPhoto
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: 'Dripping Swagg',
                    photo: varunPhoto
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Sorry I zoned out :(',
                    photo: prernaPhoto
                },
                {
                    name: 'George P Burdell',
                    username: 'THWG',
                    lastMessage: 'Testing if the message is cut if its too long',
                    photo: burdellPhoto
                }
            ]
        }
    }

    generateContactCards() {
        let userData = this.state.contacts;

        let list = [];
        for (let index = 0; index < userData.length; index++) {
            const card = <div className={'contact-card'} id={userData[index]['username']} onClick={this.handleClick}><Row><Contact
                name={userData[index]['name']}
                username={userData[index]['username']}
                lastMessage={userData[index]['lastMessage']}
                photo={userData[index]['photo']}
            /></Row></div>;
            list.push(card);
        }

        return list;
    }

    handleClick = (e) => {
        // this is the username of contact on which the user has clicked
        const selectedUser = e.currentTarget.id;

        // Write code here to change the UI for the chats display element to show the chat history with the chat 'selectedUser'
        // For now I have just console logged it
        // We need API calls here

        this.props.currentChateeChangeHandler(selectedUser);

        console.log(selectedUser + " was selected");
    };

    render() {

        return (
            <div>
                <Container className={'all-contacts-container'}>
                    <br/>
                    {this.generateContactCards()}
                    <br/>
                </Container>
            </div>
        );
    }
}

export default AllContacts;
