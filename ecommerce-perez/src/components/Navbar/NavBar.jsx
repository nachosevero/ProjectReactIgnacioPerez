
import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Infotech</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#cart">
                        <CartWidget/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)}

export default NavBar
