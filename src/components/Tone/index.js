import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

const Tone = () =>{

    const initialFormData = {
        text: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const _handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
    }

    const _handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/text', {method: 'POST', 
            body: JSON.stringify(formData.text), 
            headers:{
                'Content-Type': 'application/json',
            }})
            console.log(formData.text)
            console.log(response)
            if(response.status === 200){
                setFormData();
                console.log('success!')
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
                    type='text'
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
                {/* {formData.map((data)=>{
                    return(
                        <h1>{data.tone_name}</h1>
                    )
                })} */}
                {formData.result}
            </div>
                
            </Container>
        </div>
    )
}

export default Tone;