import React, { FormEvent } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase'

interface Props { }

interface State {
    email: string
    password: string
}

class SignUp extends React.Component<Props, State> {
    render() {
        return(
            <Container fluid>
            <form onSubmit={this.signUp}>

            </form>
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>
                        メールアドレス
                    </Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力" value={this.state.email}></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Control type="password" placeholder="パスワードを入力" value={this.state.password}></Form.Control>
                    <Form.Text className="text-muted">パスワードは6文字以上である必要があります。</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">登録</Button>
            </Form>
        </Container>
        )
    }

    signUp(event: FormEvent<HTMLFormElement>) {
        let email = this.state.email
        let password = this.state.password
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            if (userCredential.user) {
                this.props
            }  
        });
        event.preventDefault()
    }
}

export default SignUp