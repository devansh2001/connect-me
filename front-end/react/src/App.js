import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChattingWindow from './components/chatting-window/ChattingWindow';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/create-user/SignUp';
import Login from './components/create-user/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (<Router>
    <div className="App">
      <Switch>
          <Route exact path='/' component={ChattingWindow} />
          <Route path="/log-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  </Router>   
  );
}

export default App;
