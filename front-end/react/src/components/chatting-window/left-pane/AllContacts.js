import React, {Component} from 'react';
import {CardGroup, CardDeck, Row, Col, Container} from 'react-bootstrap';
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
                }
            ]
        }
    }

    generateContactCards() {
        let userData = this.state.contacts;

        let list = [];
        for (let index = 0; index < userData.length; index++) {
            const card = <div className={'contact-card'}><Row><Contact
                name={userData[index]['name']}
                username={userData[index]['username']}
                lastMessage={userData[index]['lastMessage']}
            /></Row></div>;
            list.push(card);
        }

        return list;
    }

    render() {
        return (
            <div>
                <Container>
                    {this.generateContactCards()}
                </Container>
            </div>
        );
    }
}

export default AllContacts;
