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
                const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/user/register', {
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
        <div className='signup'>
            <div className='signup-item'>
            <div className='logo'>
            <img src='https://image.flaticon.com/icons/png/512/4359/4359295.png' alt='speech audit' style={{height: '1.5rem'}}/>
            <p>Speech Audit</p>
            </div>
            <h2>Create your account</h2>
            <small>Sign up to stay updated on our speech analyzer</small>
            <Container className='signup-form'>
            <Form onSubmit={_handleSignup} style={{width: "20rem", margin: '2rem'}}>
                <Form.Group className="mb-3" controlId="email">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={signupData.email}
                    onChange={_handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={signupData.password}
                    onChange={_handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="repassword">
                    {/* <Form.Label>Re-Enter Password</Form.Label> */}
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
						Welcome! You will be redirected to log in. If you
						are not automatically redirected, please click{' '}
						{<Link to='login'>here</Link>}.
					</Alert>
				)}
            </Form>
            </Container>
            </div>
            <div className='signup-item'>
            <img className='signup-img' src='https://bogolovan.com/wp-content/uploads/2018/09/AdobeStock_emotions-collage-min-1024x1024.jpeg'/>
            </div>
            
        </div>
    )
}

export default Signup;