import React, { Component } from "react";
import {Form, Control, Button, Container, Row} from 'react-bootstrap';
import ConnectMe from "../chatting-window/left-pane/ConnectMe"
import ChattingWindow from "../chatting-window/ChattingWindow";
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "", 
            password: " ",
            isSubmitDisabled: true
            
        }
    }
    handleUserNameChange = e => {
        this.setState({ userName: e.target.value });
        this.props.userNameUpdate(e.target.value);
        console.log(this.props.userName);
        this.handleSubmitChange();
    };
    
    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
        this.handleSubmitChange();
    };

    handleSubmitChange = e => {
        let userName = this.state.userName;
        let password = this.state.password;
        var shouldDisableSubmit = this.state.isSubmitDisabled;
        if (userName === '' || password === '') {
            shouldDisableSubmit = true;
        } else {
            // validation logic here
            this.props.userNameUpdate(userName) 
            shouldDisableSubmit = false;
        }
        this.setState({
            isSubmitDisabled: shouldDisableSubmit
        });
        
    };

    handleSubmit = () => {
        // update later

    };

    render() {
        console.log("show" + this.props.userName);
        return (
            <div className="log-in-page">
            <div className="parent-width-log-controller"> 
            <br></br>
            <Row>
            <ConnectMe/>    
            <Container className= "parent-log-window">
            <form>
                <br></br>
                <br></br>
                <h3>Log In</h3>
                <br>
                </br>
                <div className="form-group">
                    <label className="userName-label">Username</label>
                    <Form.Control 
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter username"}
                        onChange = {this.handleUserNameChange}
                    />
                </div>

                <div className="form-group">
                    <label className="password-label">Password</label>
                    <Form.Control 
                        type={"password"}
                        className={"form-control"}
                        placeholder={"Enter password"}
                        onChange = {this.handlePasswordChange}
                    />
                </div>
                {/*
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                */}
                <br></br>
                <div className="button-width-controller">
                <Link to={{
                    pathname: "/chatting-window", 
                    state: {
                        userName: this.state.userName
                    }
                }}>
                <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    variant={'primary'}
                    disabled={this.state.isSubmitDisabled}
                    block
                    href="/chatting-window"
                > Submit </Button>
                </Link>
                </div> 
                <p className="not-registered-text-right">
                    Not registered? <a href="/sign-up">Sign Up</a> here!
                </p>
            </form>
            </Container>
            </Row>
            </div>
            </div>
        );
    }
}
export default Login;