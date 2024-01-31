import { Container } from 'react-bootstrap'
import { Outlet, Navigate } from 'react-router-dom'
import Menu from './Menu.jsx'
import { useAuth } from '../hooks/useAuth.js'

function Layout () {
  const { auth } = useAuth()

  if (!auth) return <Navigate to='/login' />

  return (
    <>
      <Menu />
      <Container className='d-flex flex-column align-items-center'>
        <div className='mt-5'>
          <Outlet />
        </div>
      </Container>
    </>
  )
}

export default Layout
