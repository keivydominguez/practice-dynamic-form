import {Navbar, Container} from "react-bootstrap";

export default function NavbarMenu() {
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">Dynamic form</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>Singed in as: {' '}
                            <a href='#' target='_blank' rel='noreferrer'>Keivy</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}