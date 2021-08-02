import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return(
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/"><img src='https://image.flaticon.com/icons/png/512/4359/4359295.png' alt='speech audit' style={{height: '2rem'}}/> Speech Audit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/demo">Demo</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation