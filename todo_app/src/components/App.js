import React from 'react';
import ToDoFormContainer from './ToDoFormContainer';
import Container from 'react-bootstrap/Container';
import ToDoListContainer from './ToDoListContainer';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App">
      <h1 className="mb-4 mt-3">ToDoApp</h1>
      <Container>
        <Row>
          <Col>
            <ToDoFormContainer />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="mt-3">
            <ToDoListContainer />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;