import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

interface Props { }

const SignUp: React.FC<Props> = props => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>
                        メールアドレス
                    </Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力"></Form.Control>
                </Form.Group>

                <Form.Group controlId="formPassword">
                </Form.Group>
            </Form>
        </Container>
    )
}

export default SignUp