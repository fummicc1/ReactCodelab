import React, { Props } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const SignUp: React.FC = () => {
    return (
        <div className="root">
            <Jumbotron>
                <h2>
                    アカウントを作成しましょう
                </h2>
            </Jumbotron>
        </div>
    )
}

export default SignUp;