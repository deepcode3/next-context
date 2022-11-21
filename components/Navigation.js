import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap"
import Link from 'next/link'
import { useContext } from "react"
import AppContext from "../AppContext"

export default function Navigation(){
    const value =useContext(AppContext);
    let {lanSelected}=value.state;
    let {navbarAboutLink,navbarContactLink}=value.state.languages;

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link href="/">Next Context API</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link href="/about">{navbarAboutLink}</Link>
                        <Link href="/contact">{navbarContactLink}</Link>
                        <NavDropdown 
                        title={lanSelected}
                        id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => value.setLanSelected("en")}> English</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => value.setLanSelected("es")}> Spanish</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}