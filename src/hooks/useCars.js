import { useEffect, useState } from 'react'
import { fetchAPIcar, fetchAPIcars } from '../services/fetchAPIcars'
import { useAuth } from './useAuth'

export function useCars () {
  const [cars, setCars] = useState(null)
  const [loading, setLoading] = useState(false)

  const { auth } = useAuth()
  useEffect(() => {
    setLoading(true)
    fetchAPIcars({ token: auth.token })
      .then(data => setCars(data.data))
      .catch(e => console.error(`Error fetch hook: ${e}`))
      .finally(() => setLoading(false))
  }, [])

  const getCar = async ({ filter }) => {
    setLoading(true)
    try {
      const car = await fetchAPIcar({ filter, token: auth.token })
      setCars(car.data)
    } catch (e) {
      console.error('Error getting car')
      setCars(null)
    } finally {
      setLoading(false)
    }
  }

  return [cars, loading, getCar]
}
