import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useState } from "react";

const Tone = () =>{

    const initialFormData = {
        text: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    const [tone, setTone] = useState([]);

    const [loading, setLoading] = useState(true);

    const _handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
    }

    const _handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(false)
        try{
            const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/text', 
            {method: 'POST', 
            body: JSON.stringify({text: formData.text}), 
            headers:{
                'Content-Type': 'application/json',
            }})
            setLoading(true)
            if(response.status === 200){
                const data = await response.json()
                setTone(data.result.document_tone.tones)
            }
        }catch(error){
            console.log(error)
        }
    }
    
    return(
        <div className='tone'>
            <Container className='tone-analyzer-form'>
            <div className='tone-item tone-input'>
            <h3>Tone Analyzer</h3>
            <p>Main features</p>
            <Form onSubmit={_handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Control rows={3} 
                    required
                    value={formData.text}
                    type="text"
                    placeholder="i.e. Thank you for trying speech audit"
                    onChange={_handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            </Container>
            <Container>
            <div className='results'>
                <h2>Result:</h2>
                {loading 
                ? 
                tone.map((data, i) => {
                    if(data.length === 0){
                        return (
                        <h3>
                            No tone detected. Try Again.
                        </h3>)
                    }else{ 
                    return(
                        <h3 key={i}>
                            {data.tone_name}
                        </h3>
                    )}
                })
                : <Spinner animation="border" variant="success" />}
            </div>
            </Container>
        </div>
    )
}

export default Tone;