import Form from 'react-bootstrap/Form';
import { Button, Container, Alert } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react';

const Signup = () => {
    const initialFormData = {
        email: '',
        password: '',
        repassword: '',

    }

    const history = useHistory();
    const [signupData, setSignupData] = useState(initialFormData)

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const _handleChange = (event) => {
        setSignupData((prevState) => {
            return {...prevState, [event.target.id]: event.target.value}
        })
    }

    const _handleSignup = async(event) => {
        event.preventDefault();
        if(!error){
            try{
                const response = await fetch('http://localhost:8080/user/signup', {
                    method:'POST',
                    body: JSON.stringify(signupData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                if(response.status === 201){
                    setSuccess(true);
                    setTimeout(() => {
                        history.push('/signin')
                    },2500)
                }
            }catch(error){
                console.log(error)
            }
        }
    }

    const _handlePasswordMatch = (event) => {
        if(signupData.password !== signupData.repassword){
            setError(true)
        }else{
            setError(false)
        }
    }

    return(
        <div>
            <h2>Sign Up</h2>
            <Container className='signup-form'>
            <Form onSubmit={_handleSignup}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={signupData.email}
                    onChange={_handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={signupData.password}
                    onChange={_handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="repassword">
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Re-Enter Password" 
                    value={signupData.repassword}
                    onChange={_handleChange}
                    onBlur={_handlePasswordMatch}
                    />
                </Form.Group>
                    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {error && <Alert variant='danger'>Passwords must match!</Alert>}
				{success && (
					<Alert variant='success'>
						User successfully created! You will be redirected to log in. If you
						are not automatically redirected, please click{' '}
						{<Link to='login'>here</Link>}.
					</Alert>
				)}
            </Form>
            </Container>
        </div>
    )
}

export default Signup;