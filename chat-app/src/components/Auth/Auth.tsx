import React, { useState } from 'react';
import firebase, { User } from 'firebase';
import { Redirect } from 'react-router-dom';

const Auth: React.FC = (props) => {
    firebase.auth().onAuthStateChanged((user: User | null) => {
        if (user) {
            return (
                <Redirect to={}></Redirect>
            )
        }
    })
}

export default Auth;