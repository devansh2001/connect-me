import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";
import Contact from "./left-pane/Contact";
import {Row, Col, Container} from 'react-bootstrap';

class ChattingWindow extends Component {
    render() {
        return (
            <div className={'chatting-window'}>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Contact/>
                        </Col>
                        <Col xs={9}>
                            {/* insert the current user info component from issue 21 here*/}
                            {/* insert the recent chats component from issue 22 here*/}
                            <TypeMessageBox/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ChattingWindow;