import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

const Signup = () => {
    return(
        <div>
            <h1>Sign Up</h1>
            <Container className='signup-form'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicReEnterPassword">
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-Enter Password" />
                </Form.Group>
                    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default Signup;