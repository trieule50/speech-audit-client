import { Container, Navbar, Nav } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

const Navigation = ({ userInfo, loggedIn, _handleLogout}) => {
    return(
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/"><img src='https://image.flaticon.com/icons/png/512/4359/4359295.png' alt='speech audit' style={{height: '2rem'}}/> Speech Audit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/demo">Demo</Nav.Link>
                        {userInfo && loggedIn
                        ? (
                            <>
                            <Nav.Link href="/tone">Tone Analyzer</Nav.Link>
                            <Nav.Link href="/audio">Speech Analyzer</Nav.Link>
                            <Nav.Link href="/" onClick={_handleLogout}>Logout</Nav.Link>
                            <Avatar src="/broken-image.jpg" />
                            </>
                        )
                        : (
                            <>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                            </>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation