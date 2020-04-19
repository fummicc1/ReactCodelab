import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Button, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  root: {

  }
})

function App() {
  return (
    <div className="App">   
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            Hello
          </Route>
        </Switch>
      </Router>
    </ Container>
    </div>
  );
}

export default App;
