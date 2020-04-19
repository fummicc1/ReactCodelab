import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SignUp from '../Auth/SignUp';
import firebase, { User } from 'firebase';

function App() {
  const [user, setUser] = useState(firebase.auth().currentUser);

  firebase.auth().onAuthStateChanged((user: User | null) => {
    setUser(user);
  })
  if (user) {
  }
  return (
    <div>
      <Container fluid>
        <Router>
          <Switch>
            <Route exact path="/signUp" component={SignUp}/>
            <Route exact path="/signIn" />
          </Switch>          
        </Router>
      </Container>
    </div>
  );
}

export default App;
