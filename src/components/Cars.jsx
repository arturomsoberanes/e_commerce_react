import { Link } from 'react-router-dom'
import { Container, Spinner, Card, Button } from 'react-bootstrap'
import { useCars } from '../hooks/useCars.js'

function Cars () {
  const [cars, loading] = useCars()

  if (loading) {
    return (
      <Container className='d-flex flex-column align-items-center'>
        <Spinner className='mt-5' animation='border' variant='warning' />
      </Container>
    )
  }

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {cars?.allCars.map(car => (
        <Card key={car._id} className='m-2'>
          <Card.Header>{car.model}</Card.Header>
          <Card.Body>
            <Card.Text>
              <ul>
                <li>{car.brand}</li>
                <li>{car.cylinders}</li>
              </ul>
            </Card.Text>
            <Button variant='primary'>
              <Link className='link' to={`/cars/${car._id}`}>Detalles..</Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
export default Cars
