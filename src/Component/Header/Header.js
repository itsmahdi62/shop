import { Container , Nav , Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./Header.css"
const Header = () =>{
    return <header className="bg-nav">
        <Navbar >
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand >FC MARKET</Navbar.Brand>
                </LinkContainer>
                <Nav>
                   <LinkContainer to='/cart'>
                    <Nav.Link className="mx-2 p-1">
                        <i className="fa fa-shopping-cart me-2"></i>
                        سبد خرید
                    </Nav.Link>
                   </LinkContainer>
                   <LinkContainer to='/account'>
                    <Nav.Link className="mx-2 p-1">
                        <i className="fa fa-user me-2"></i>
                        حساب کاربری
                    </Nav.Link>
                   </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </header>
}
export default Header