import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import Nav from './app/components/Nav';
import Login from './app/components/Login';
import Home from './app/components/Home';
import Create from './app/components/Create';
import Register from './app/components/Register';

import Auth from './app/components/Auth/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  //<Nav auth={this.auth} />

  render() {
    return (
      <>

        <div className="body">
          <Route path='/' exact render={props => <Login auth={this.auth} {...props} />} />
          <Route path='/register' exact render={props => <Register auth={this.auth} {...props} />} />
          <Route path='/home' render={props => this.auth.isAuthenticated() ? <Home auth={this.auth} {...props} /> : <Redirect to="/" />} />
          <Route path="/create" render={props =>
            this.auth.isAuthenticated() ? (
              <Create auth={this.auth} {...props} />
            ) : (
                this.auth.login()
              )
          }
          />
        </div>
      </>
    );
  }
}

export default App;
