import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

let data = [
    {
        content: "Test1",
        isDone: false,
    },
    {
        content: "Test2",
        isDone: false,
    },
    {
        content: "Test3",
        isDone: false,
    },
    {
        content: "Test4",
        isDone: false
    }
];

function getToDos() {
    axios.get("http://localhost:3000/api/v1/todos/stub").then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
        }
    });
}

function ToDoListContainer(props) {
    getToDos();
    return (
        <Container className="list-container">
            <h3>ToDo一覧</h3>
            <ListGroup>
                <ListGroupItem>
                    {data[0].content}
                </ListGroupItem>
            </ListGroup>
        </Container>
    )
}

export default ToDoListContainer;