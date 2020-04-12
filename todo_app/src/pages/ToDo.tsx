import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ToDo: React.FC = () => {
    return (
        <Container className="todo">
            <Jumbotron>
                Welcome to ToDo App!
            </Jumbotron>
        </Container>
    )
}

export default ToDo;