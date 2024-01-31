import { Card } from 'react-bootstrap'
import { useAuth } from '../hooks/useAuth.js'
function Perfil () {
  const { auth } = useAuth()
  const { _id, name, username } = auth.user
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          <p>username: {username}</p>
          <p>ID user: {_id}</p>
        </Card.Subtitle>
        <Card.Link href='#'>Card Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Perfil
