import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';

const Registration = () => {

    const auth = getAuth(app);

    // User State
    const [users, setUser] = useState({});

    // Google Authentication
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // GitHub Authentication
    const handleGitHubSignIn = () => {

    }

    const handleSubmitButton = event => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>I am registration</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSubmitButton}>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className='d-grid gap-2 col-4 mx-auto' variant="primary" type="submit">
                        Registration
                    </Button> <br />
                    <Button onClick={handleGoogleSignIn} className='d-grid gap-2 col-4 mx-auto'>
                        Google
                    </Button> <br />
                    <Button onClick={handleGitHubSignIn} className='d-grid gap-2 col-4 mx-auto'>
                        GitHub
                    </Button>
                </Form>
            </div>
            <div>
                <h2>Name: {users.displayName}</h2>
                <img src={users.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Registration;