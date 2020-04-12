import React, { ReactNode } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import firebase, { User } from 'firebase'
import SignUp from './pages/SignUp'
import ToDo from './pages/ToDo'
import { firebaseConfig } from './firebase/config'
import ToDoList from './pages/ToDoList'


const App: React.FC = () => {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  return (
    <Home>
    </Home>
  )
}

interface Props {}
interface State {
  isSignin: boolean
}

class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      isSignin: firebase.auth().currentUser == null
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user: firebase.User | null) => {
    this.setState({
      isSignin: user == null
    })
  }

  render() {
    const body: ReactNode = this.state.isSignin ? <ToDoList/> : <SignUp />
    return (
      <div className="App">
        <Container>  
          <Jumbotron fluid>
            <h1>
              ToDo App
            </h1>
          </Jumbotron>     
          {body}
        </Container>
      </div>
    )
  }
}

export default App
