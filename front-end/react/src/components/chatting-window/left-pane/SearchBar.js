import React, {Component} from 'react';
import ReactSearchBox from 'react-search-box'
import {Row, Col, Container} from 'react-bootstrap';
import { MDBCol, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";

class SearchBar extends Component {
    render() {
        return (
            <Container className={'search-bar-container'}>
            <div className = 'search-bar'>
            <Row>
            <Col xs ={1} className="search-icon-column">
                <MDBIcon className = "search-icon" icon="search" />
                
            </Col>
            <Col xs={10} className={'search-format'}>
                <ReactSearchBox
                    placeholder = "Search"
                    /*enable these later depending on 
                    desired functionality of the search bar*/
                    /*searchAsYouType = {true}*/
                    /*inputBoxHeight = '300'*/
                    /*submit={<img src="/submit.png" alt=""/>}*/
                    /*callback={record => console.log(record)}*/
                />
            </Col>
            </Row>
          </div>
          </Container>
        )
      }
}
export default SearchBar;