import React, {useContext} from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar className='p-0 mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        
                            <Link to={'/category/0'}>Home</Link>
                            <Link className='mx-3' to={'#'}>About</Link>
                            <Link to={'#'}>Contact</Link>

                    </Nav>
                    <Nav>
                        { user && <Nav.Link href="#deets"> <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle> </Nav.Link>}
                        
                       { user ?
                        <Button onClick={handleLogOut} className='rounded-0 ' variant="secondary">LogOut</Button> :
                        <Link to='/login'><Button className='rounded-0 ' variant="secondary">Login</Button></Link>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;