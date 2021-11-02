import Form from 'react-bootstrap/Form';
import { Button, Container, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signin = ({ setUserInfo, handleSetLoggedIn }) => {

    const initialFormData = {
        email: '',
        password: '',

    }

    const history = useHistory();
    const [signinData, setSigninData] = useState(initialFormData);

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
        <div className='signin'>
            <div className='signin-item signin-img'>
                <img className='signin-img' src='https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/c8fd9bde-38ac-4fc6-bf3f-3246b84748a9/Rendition/low-res/Content/Public'/>
            </div>
            <div className='signin-item'>
            <div className='logo'>
            <img src='https://image.flaticon.com/icons/png/512/4359/4359295.png' alt='speech audit' style={{height: '1.5rem'}}/>
            <p>Speech Audit</p>
            </div>
            <h2>Welcome Back</h2>
            <small>Sign in to stay updated on our speech analyzer</small>
            <Container className='signin-form'>
            <Form onSubmit={_handleSignin} style={{width: "20rem", margin: '2rem'}}>
                <Form.Group className="mb-3" controlId="email">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control 
                    type="email" 
                    value={signinData.email}
                    placeholder="Enter email"
                    onChange={_handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control 
                    type="password" 
                    value={signinData.password}
                    placeholder="Password" 
                    onChange={_handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                {error && <Alert variant='danger'>Oops, something went wrong. Please try again.</Alert>}
            </Form>
            </Container>
            </div>
            
        </div>
    )
}

export default Signin;