import { useState } from 'react'
import { fetchAPILogin } from '../services/fetchAPIauth'

function getLocaData () {
  let localData
  try {
    localData = JSON.parse(window.localStorage.getItem('e-commerce-user'))
    return localData
  } catch (e) {
    localData = window.localStorage.removeItem('e-commerce-user')
    return null
  }
}

export function useAuth () {
  const localData = getLocaData()
  const [auth, setAuth] = useState(localData)
  const [errorAuth, setErrorAuth] = useState(false)
  const [loading, setLoading] = useState(false)

  const login = async ({ dataUser }) => {
    setLoading(true)
    try {
      const { data } = await fetchAPILogin({ dataUser })
      window.localStorage.setItem('e-commerce-user', JSON.stringify(data))
      setAuth(data)
      setErrorAuth(false)
    } catch (e) {
      setErrorAuth(true)
      console.error(e)
    } finally {
      setLoading(false)
    }
  }
  const logout = async () => {
    setLoading(true)
    try {
      window.localStorage.removeItem('e-commerce-user')
      setAuth(null)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return { auth, login, logout, loading, errorAuth }
}
