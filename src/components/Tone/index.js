import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

const Tone = () =>{

    const initialFormData = {
        text: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const [tone, setTone] = useState('')

    const _handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
    }

    const _handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/text', 
            {method: 'POST', 
            body: JSON.stringify({text: formData.text}), 
            headers:{
                'Content-Type': 'application/json',
            }})
            if(response.status === 200){
                console.log('success!')
                const data = await response.json()
                setTone(data.result.document_tone.tones[0].tone_name)
                // setFormData()
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h1>Tone Analyzer</h1>
            <Container className='tone-analyzer-form'>
            <Form onSubmit={_handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text Area</Form.Label>
                    <Form.Control rows={3} 
                    required
                    value={formData.text}
                    type="text"
                    onChange={_handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
            <Container>
            <div>
                <h1>{tone}</h1>
            </div>
                
            </Container>
        </div>
    )
}

export default Tone;