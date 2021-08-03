import { Button, Container, Form } from "react-bootstrap";

const Tone = () =>{
    return(
        <div>
            <h1>Tone Analyzer</h1>
            <Container className='tone-analyzer-form'>
            <Form>
                <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                    <Form.Label>Text Area</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default Tone;