import React, { ReactNode } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import firebase, { User } from 'firebase'
import SignUp from './pages/SignUp'
import { firebaseConfig } from './firebase/config'
import ToDoList from './pages/ToDoList'
import { Switch, BrowserRouter as Router, Link, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const App: React.FC = () => {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={withRouter(Home)}></Route>
      </Router>
    </div>
  )
}

interface State { }

class Home extends React.Component<RouteComponentProps, State> {

  constructor(props: RouteComponentProps) {
    super(props)
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged = (user: firebase.User | null) => {
    if (user != null) {
      this.props.history.push("/todo_list")
    } else {
      this.props.history.push("/signUp")
    }
  }

  render() {    
    return (
      <Container>
        <Switch>
          <Route exact path="/signUp" component={SignUp}></Route>
          <Route path="/todo_list" component={ToDoList}></Route>
        </Switch>
      </Container>
    )
  }
}

export default App
