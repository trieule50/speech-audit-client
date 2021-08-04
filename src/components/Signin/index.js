import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signin = () => {

    const initialFormData = {
        email: '',
        password: '',

    }

    const history = useHistory();
    const [signinData, setSigninData] = useState(initialFormData)

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const _handleChange = (event) => {
        setSigninData((prevState) => {
            return {...prevState, [event.target.id]: event.target.value}
        })
    }

    const _handleSignin = async (event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/user/signin', {
                method: 'POST',
                body: JSON.stringify(signinData),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            console.log(data)
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
            </Form>
            </Container>
        </div>
    )
}

export default Signin;