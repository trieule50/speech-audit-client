import { Form, Button } from 'react-bootstrap'

const Audio = () => {
    return(
        <div className='audio'>
            <div className='audio-item'>
                <div className='logo'>
                <img src='https://image.flaticon.com/icons/png/512/4359/4359295.png' alt='speech audit' style={{height: '1.5rem'}}/>
                <p>Speech Audit</p>
                </div>
                <p className='coming-soon'>GREAT THINGS ARE COMING</p>
                <p>Target date is December 2021</p>
                <Button href='/demo' variant="warning" style={{ marginBottom: '2rem'}}>
                Learn More {">>"}
                </Button>
            </div>
        </div>

        // <div className='audio'>
        //     <h2>Audio Analyzer</h2>
        //     <Form.Group controlId="formFile" className="mb-3">
        //         {/* <Form.Label>Upload Audio File</Form.Label> */}
        //         <Form.Control type="file" />
        //         <Button variant="secondary">Submit</Button>
        //     </Form.Group>
        // </div>
        
    )
}

export default Audio