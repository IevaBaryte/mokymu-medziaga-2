import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = ({title, navItems}) => {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        {navItems.map(item => (
                            <Nav.Link key={item} href={'#' + item }>
                                {item}
                                </Nav.Link> 
                        ))}
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>    )
}

export default Navigation