import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import ChattingWindow from './components/chatting-window/ChattingWindow';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/create-user/SignUp';
import Login from './components/create-user/Login';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

class App extends Component {
 
    state = {
      userName: "test"
    };
  

  userNameUpdate(name) {
    this.setState({userName: name});
  }
  render() {
    return (<Router>
      <div className="App">
        <Switch>
            <Route exact path='/' render={() => (
              <Login userName={this.state.userName}
              userNameUpdate={(name) => this.userNameUpdate(name)}/>
            )} />
            <Route path="/chatting-window" render={() => (
              <ChattingWindow userName={this.state.userName}
              userNameUpdate={(name) => this.userNameUpdate(name)}/>
            )} />
            <Route path="/sign-up" render={() => (
              <SignUp userName={this.state.userName}
              userNameUpdate={(name) => this.userNameUpdate(name)}/>
            )} />

        </Switch>
      </div>
    </Router>   
    );
    }
  }
  // function App() {
  //   return (<Router>
  //     <div className="App">
  //       <Switch>
  //           <Route exact path='/' component={Login} />
  //           <Route path="/chatting-window" component={ChattingWindow} />
  //           <Route path="/sign-up" component={SignUp} />
  //       </Switch>
  //     </div>
  //   </Router>   
  //   );
  // }

export default App;
