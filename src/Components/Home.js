import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Home() {
  return (
    <div>
      <Navbar className="almostWhite" expand="lg" variant="light">
        <Container>
          <img className="nav-img" src="Images/5.png" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Link className="nav-link hover-effect" to="/">Home</Link>
              {/* <Link className="nav-link hover-effect" to="/ministries">Ministries</Link> */}
              <Link className="nav-link hover-effect" to="/schedule">Events</Link>
              <Link className="nav-link hover-effect" to="/about">About us</Link>
              <NavDropdown title="Ministries" id="basic-nav-dropdown">
                <Link to="/kids" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.1">
                    Kids
                  </NavDropdown.Item>
                </Link>
                <Link to="/youth" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.2">
                    Youth
                  </NavDropdown.Item>
                </Link>
                <Link to="/youngadults" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.3">
                    Young Adults
                  </NavDropdown.Item>
                </Link>
                <Link to="/mensgroup" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.4">
                    Men's group
                  </NavDropdown.Item>
                </Link>
                <Link to="/womansgroup" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.4">
                    Woman's group
                  </NavDropdown.Item>
                </Link>
                <Link to="/foodpantry" className="notUnderlined">
                  <NavDropdown.Item href="#action/3.4">
                    Food Pantry
                  </NavDropdown.Item>
                </Link>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Donate" id="basic-nav-dropdown">
                  <NavDropdown.Item href="https://www.paypal.com/donate?token=dAPUbR6l-8mcvWRdRvxLGBSAqI6Cbs4eHsT276tLRzHpL-IdjwQrm2uXC07XZMmK97Y9SRiPCcQRuLyN" target="_top">
                    Paypal
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Venmo
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}
export default Home