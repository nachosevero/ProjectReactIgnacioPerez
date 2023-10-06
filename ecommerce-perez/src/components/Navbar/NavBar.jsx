import { Link, NavLink } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap"

import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Infotech</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="mx-auto p-2 text-decoration-none" to="/">Home</Link>
                    <NavLink className="mx-auto p-2 text-decoration-none" to="/categoria/pc">PC</NavLink>
                    <NavLink className="mx-auto p-2 text-decoration-none" to="/categoria/consolas">Consolas</NavLink>
                </Nav>
                <Nav>
                    <Link className="text-decoration-none" to="/cart"> 
                        <CartWidget />
                    </Link>
                </Nav>
            </Container>
        </Navbar>
)}

export default NavBar
