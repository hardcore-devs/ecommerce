import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () =>{
    return(
        <div className="">
            <Navbar bg="dark" variant="dark" className='fixed-bottom'>
                <Container>
                <Navbar.Brand href="/">
                    
                Footer
                </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Footer;