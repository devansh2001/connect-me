import React, {Component} from 'react';
import {Row, Container} from 'react-bootstrap';
import Contact from "./Contact";

class AllContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'FRIENDS forever <3!'
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Chai + Quarantine'
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: 'Dripping Swagg'
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Sorry I zoned out :('
                },
                {
                    name: 'George P Burdell',
                    username: 'THWG',
                    lastMessage: 'Testing if the message is cut if its too long'
                },
                {
                    name: 'Devansh  Ponda',
                    username: 'dponda',
                    lastMessage: 'FRIENDS forever <3!'
                },
                {
                    name: 'Vatsal Trivedi',
                    username: 'vtrivedi',
                    lastMessage: 'Chai + Quarantine'
                },
                {
                    name: 'Varun Kulkarni',
                    username: 'vkulkarni',
                    lastMessage: 'Dripping Swagg'
                },
                {
                    name: 'Prerna Ravi',
                    username: 'pravi',
                    lastMessage: 'Sorry I zoned out :('
                },
                {
                    name: 'George P Burdell',
                    username: 'THWG',
                    lastMessage: 'Testing if the message is cut if its too long'
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
