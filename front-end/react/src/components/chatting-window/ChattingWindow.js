import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import CurrentChat from "./right-pane/CurrentChat";
import Contact from "./left-pane/Contact";
import AllContacts from "./left-pane/AllContacts";
import {Row, Col, Container} from 'react-bootstrap';
import SearchBar from "./left-pane/SearchBar";
import ConnectMe from "./left-pane/ConnectMe"

class ChattingWindow extends Component {
    render() {
        return (
            <div className={'chatting-window'}>
                {/*<Container>*/}
                    <Row>
                        
                        <Col xs={3}>
                            <Row >
                                <ConnectMe />
                                <SearchBar/>
                                <AllContacts/>
                            </Row>  
                        </Col>
                        <Col xs={9}>
                            {/* insert the current user info component from issue 21 here*/}
                            <CurrentChat />
                            <TypeMessageBox />
                        </Col>
                    </Row>
                {/*</Container>*/}
            </div>
        )
    }
}

export default ChattingWindow;