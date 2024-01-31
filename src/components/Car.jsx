import { useParams } from 'react-router-dom'
import { useCars } from '../hooks/useCars'
import { Card, Container, Spinner } from 'react-bootstrap'

function Car () {
  const { carId } = useParams()
  const [cars] = useCars()

  const car = cars?.allCars.filter(car => car._id === carId)[0]

  if (!car) {
    return (
      <Container className='d-flex flex-column align-items-center'>
        <Spinner className='mt-5' animation='border' variant='warning' />
      </Container>
    )
  }

  return (
    <Card key={car._id} className='m-2'>
      <Card.Header>{car.model}</Card.Header>
      <Card.Body>
        <Card.Text>
          <ul>
            <li>Marca: {car.brand}</li>
            <li>Cilindros: {car.cylinders}</li>
            <li>Modelo: {car.model}</li>
            <li>Motor: {car.engine}</li>
            <li>Precio (USD): ${car.price}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Car
