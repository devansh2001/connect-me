import React, { Component } from "react";
import {Form, Control, Button, Container, Row} from 'react-bootstrap';
import ConnectMe from "../chatting-window/left-pane/ConnectMe"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isSubmitDisabled: true
            
        }
    }
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
        var shouldDisableSubmit = this.state.isSubmitDisabled;
        if (email === '' || password === '') {
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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="button-width-controller">
                <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    variant={'primary'}
                    disabled={this.state.isSubmitDisabled}
                    block
                > Submit </Button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
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