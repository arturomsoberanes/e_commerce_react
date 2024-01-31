import { NavLink, useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth'

function Menu () {
  const navigation = useNavigate()
  const { logout } = useAuth()

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>
          <NavLink className='navbar-brand' to='/'>
            E-commerce React
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/perfil'>Perfil</NavLink>
            <NavLink className='nav-link' to='/cars'>Autos</NavLink>
            <Nav.Link onClick={() => {
              logout()
              navigation('/login')
            }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Menu
