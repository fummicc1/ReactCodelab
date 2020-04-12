import React, { ReactNode } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import firebase from 'firebase'
import SignUp from './pages/SignUp'
import ToDo from './pages/ToDo'
import { firebaseConfig } from './firebase/config'


const App: React.FC = () => {
  firebase.initializeApp(firebaseConfig)
  if (firebase.auth().currentUser == null) {
    return (
      <Home child={<SignUp></SignUp>}>
      </Home>
    )
  }
  return (
    <Home child={<ToDo></ToDo>}>
    </Home>
  )
}

interface Props {
  child: ReactNode
}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <Container>  
        <Jumbotron fluid>
          <h1>
            ToDo App
          </h1>
        </Jumbotron>     
        {props.child}
      </Container>
    </div>
  )
}

export default App
