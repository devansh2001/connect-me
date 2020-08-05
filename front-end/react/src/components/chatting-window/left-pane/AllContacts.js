import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import Contact from "./Contact";
import devanshPhoto from "./../ProfilePhotos/devanshPhoto.png";
import prernaPhoto from "./../ProfilePhotos/prernaPhoto.png";
import vatsalPhoto from "./../ProfilePhotos/vatsalPhoto.png";
import varunPhoto from "./../ProfilePhotos/varunPhoto.png";
import profilePhoto from "./../ProfilePhotos/profilePhoto.png";


class AllContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'YeetCoding:)',
                    photo: devanshPhoto
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Moving on-campus',
                    photo: vatsalPhoto
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: "Just kinda vibin'",
                    photo: varunPhoto
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Coffee enthusiast!',
                    photo: prernaPhoto
                },
                {
                    name: 'Invisible Man',
                    username: 'iman',
                    lastMessage: 'Available',
                    photo: profilePhoto
                },
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'YeetCoding:)',
                    photo: devanshPhoto
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Moving on-campus',
                    photo: vatsalPhoto
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: "Just kinda vibin'",
                    photo: varunPhoto
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Coffee enthusiast!',
                    photo: prernaPhoto
                },
                {
                    name: 'Invisible Man',
                    username: 'iman',
                    lastMessage: 'Available',
                    photo: profilePhoto
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
