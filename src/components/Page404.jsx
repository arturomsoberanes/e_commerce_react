import { Container } from 'react-bootstrap'

function Page404 () {
  return (
    <Container className='d-flex flex-column align-items-center'>
      <h1 className='mt-5'>404</h1>
      <p>El contenido solicitado no existe</p>
      <p className='fs-1'>🥲</p>
    </Container>
  )
}

export default Page404
