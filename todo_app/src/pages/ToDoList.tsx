import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

class ToDoList extends React.Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    ToDo一覧
            </Jumbotron>
            </Container>
        )
    }
}

export default ToDoList