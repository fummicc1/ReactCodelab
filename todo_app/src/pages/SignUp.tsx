import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

interface Props { }

const SignUp: React.FC<Props> = props => {
    return (
        <Container fluid>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>
                        メールアドレス
                    </Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Control type="password" placeholder="パスワードを入力"></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">登録</Button>
            </Form>
        </Container>
    )
}

export default SignUp