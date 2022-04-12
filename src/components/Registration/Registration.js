import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import app from '../../firebase.init';

const auth = getAuth(app);

const Registration = () => {

    // User State
    const [users, setUser] = useState({});

    // User Error State
    // const [error, setError] = useState("")

    // Google Authentication
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // GitHub Authentication
    const githubProvider = new GithubAuthProvider();

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Facebook Authentication
    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Twitter Authentication
    const twitterProvider = new TwitterAuthProvider();

    const handleTwitterSignIn = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Sign Out Handler
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setUser({});
                console.log(error);
            });
    }

    const handleSubmitButton = event => {
        event.preventDefault();
    }

    return (
        <div>
            <h2>I am registration</h2>
            <div className='w-25 mx-auto'>
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
                    </Button>
                </Form>
            </div>
            {
                !users.email ?
                    <div className='d-flex justify-content-center mt-4 gap-2 mx-auto'>
                        <Button onClick={handleGoogleSignIn}>
                            Google
                        </Button>
                        <Button onClick={handleGitHubSignIn}>
                            GitHub
                        </Button>
                        <Button onClick={handleFacebookSignIn}>
                            Facebook
                        </Button>
                        <Button onClick={handleTwitterSignIn}>
                            Twitter
                        </Button>
                    </div>
                    :
                    <div className='d-flex justify-content-center mt-4 gap-2 mx-auto'>
                        <Button onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </div>
            }
            <div className='mt-4'>
                <h2>Name: {users.displayName}</h2>
                <img src={users.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Registration;