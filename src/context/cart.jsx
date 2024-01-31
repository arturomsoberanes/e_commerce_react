import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(null)
  const addCart = (product) => {
    const existItem = cart.filter(item => item.id === product.id)
    if (existItem) return
    setCart([...cart, product])
  }
  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  )
}
