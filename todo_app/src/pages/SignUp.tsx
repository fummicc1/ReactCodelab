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

    constructor(props: Props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <Container fluid>
                <form onSubmit={this.signUp}>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>
                                メールアドレス
                            </Form.Label>
                            <Form.Control type="email" placeholder="メールアドレスを入力" value={this.state.email} onChange={this.onChangeEmail} />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control type="password" placeholder="パスワードを入力" value={this.state.password} onChange={this.onChangePassword} />
                            <Form.Text className="text-muted">パスワードは6文字以上である必要があります。</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">登録</Button>
                    </Form>
                </form>
            </Container>
        )
    }

    onChangeEmail = (event: FormEvent<HTMLInputElement>) => {
        this.setState({
            email: event.currentTarget.value
        })
    }

    onChangePassword = (event: FormEvent<HTMLInputElement>) => {
        this.setState({
            password: event.currentTarget.value
        })
    }

    signUp(event: FormEvent<HTMLFormElement>) {
        let email = this.state.email
        let password = this.state.password
        console.log(email)
        if (email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
                if (userCredential.user) {
                }
            });
        }
        event.preventDefault()
    }
}

export default SignUp