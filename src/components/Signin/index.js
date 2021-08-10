import Form from 'react-bootstrap/Form';
import { Button, Container, Alert } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signin = ({ setUserInfo, handleSetLoggedIn }) => {

    const initialFormData = {
        email: '',
        password: '',

    }

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const history = useHistory();
    const [signinData, setSigninData] = useState(initialFormData)

    const _handleChange = (event) => {
        setSigninData((prevState) => {
            return {...prevState, [event.target.id]: event.target.value}
        })
    }
    const _handleSignin = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/user/login', {
                method: 'POST',
                body: JSON.stringify(signinData),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            if(response.status === 200){
                const data = await response.json()
                handleSetLoggedIn(data)
                history.push('/')
                setSuccess(true)
                window.location.reload()
            }else{
                setError(true)
            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h2>Sign In</h2>
            <Container className='signin-form'>
            <Form onSubmit={_handleSignin}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    value={signinData.email}
                    placeholder="Enter email"
                    onChange={_handleChange} 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    value={signinData.password}
                    placeholder="Password" 
                    onChange={_handleChange}
                    />
                </Form.Group>
                    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {error && <Alert variant='danger'>Oops, something went wrong. Please try again.</Alert>}
            </Form>
            </Container>
        </div>
    )
}

export default Signin;