
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {

    return (
        ///<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        // <Container>
        //   <LinkContainer to="/">
        //<Navbar.Brand>EstudoApp Site</Navbar.Brand>
        // </LinkContainer>
        // <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        // <Navbar.Collapse id="responsive-navbar-nav">
        //// <Nav className="me-auto">
        //  <LinkContainer to="/">
        //      <Nav.Link>Home</Nav.Link>
        //  </LinkContainer>
        //  <LinkContainer to="/sobre">
        //      <Nav.Link>Sobre</Nav.Link>
        ////   </LinkContainer>
        //  <LinkContainer to="/funcionalidades">
        ///       <Nav.Link>Funcionalidades</Nav.Link>
        //   </LinkContainer>
        /////   <LinkContainer to="/contato">
        //  <Nav.Link>Contato</Nav.Link>
        //  </LinkContainer>
        // </Nav>
        // </Navbar.Collapse>
        //   /// </Container>
        /// </Navbar>


        <Navbar bg="light" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">GamesNews</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/funcionalidades">Funcionalidade</NavDropdown.Item>
                            <NavDropdown.Item href="contato">
                                Contanto
                            </NavDropdown.Item>
                            <NavDropdown.Item href="equipe">
                                Equipe
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Menu;

