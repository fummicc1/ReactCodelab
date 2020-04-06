import React from 'react';
import FormContainer from './FormContainer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="App">
      <h1 className="mb-4 mt-3">ToDoApp</h1>
      <FormContainer />
    </Container>
  );
}

export default App;