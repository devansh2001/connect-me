import React, { Component } from "react";
import {Form, Control, Button, Container, Row} from 'react-bootstrap';
import ConnectMe from "../chatting-window/left-pane/ConnectMe"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            isSubmitDisabled: true
            
        }
    }
    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
        this.handleSubmitChange();
    };
    
    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value });
        this.handleSubmitChange();
    };
    handleUserNameChange = e => {
        this.setState({ userName: e.target.value });
        this.handleSubmitChange();
    };
    handleEmailChange = e => {
        this.setState({ email: e.target.value });
        this.handleSubmitChange();
    };
    
    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
        this.handleSubmitChange();
    };
    
    handleSubmitChange = e => {
        let email = this.state.email;
        let password = this.state.password;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let userName = this.state.userName;
        var shouldDisableSubmit = this.state.isSubmitDisabled;
        if (email === '' || password === '' || firstName === ''
            || lastName === '' || userName === '') {
            shouldDisableSubmit = true;
        } else {
            shouldDisableSubmit = false;
        }
        this.setState({
            isSubmitDisabled: shouldDisableSubmit
        });
        
    };
    handleSubmit = () => {
        //insert code here later
    };

    render() {
        return (
            <div className="sign-up-page">
            <div className="parent-width-sign-controller"> 
           
            <Row>
            <ConnectMe/>    
            <Container className= "parent-sign-window">
            <form>
                <br></br>
                <h3>Sign Up</h3>
                <br></br>
                <div className="form-group">
                    <label className="firstName-label">First Name</label>
                    <Form.Control 
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter first name"}
                        onChange = {this.handleFirstNameChange}
                    />
                </div>
                <div className="form-group">
                    <label className="lastName-label">Last Name</label>
                    <Form.Control 
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter last name"}
                        onChange = {this.handleLastNameChange}
                    />
                </div>
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
                    <label className="email-label">Email address</label>
                    <Form.Control 
                        type={"email"}
                        className={"form-control"}
                        placeholder={"Enter email"}
                        onChange = {this.handleEmailChange}
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
                <div className="button-width-controller">
                <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    variant={'primary'}
                    disabled={this.state.isSubmitDisabled}
                    block
                    href="/"
                > Submit </Button>
                </div>
                <p className="forgot-password text-right">
                    Already registered? <a href="/">Log in</a>
                </p>
            </form>
            </Container>
            </Row>
            </div>
            </div>
        );
    }
}

export default SignUp;