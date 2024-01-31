import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

function MainContent () {
  const { cart } = useContext(CartContext)

  return (
    <main className='main-content'>
      <h1>{JSON.stringify(cart)}</h1>
    </main>
  )
}

export default MainContent
