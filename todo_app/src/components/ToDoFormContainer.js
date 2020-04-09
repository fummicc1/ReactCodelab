import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Button, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'

function ToDoFormContainer(props) {    
    return (
        <Container>
            <Form onClick>
                <Form.Group controlId="group1">
                    <Form.Label>Content</Form.Label>
                    <Row>
                        <Col>
                        <Form.Control type="text" placeholder="学校のレポートを仕上げる"></Form.Control>
                        </Col>                        
                        <Col>
                        <Button type="submit">追加</Button>
                        </Col>                        
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ToDoFormContainer;