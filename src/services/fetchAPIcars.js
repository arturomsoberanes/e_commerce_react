import axios from 'axios'

export async function fetchAPIcars ({ token }) {
  const API_URL = import.meta.env.VITE_CAR_API_URI
  try {
    const data = await axios.get(`${API_URL}/cars/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (e) {
    console.error('Error fetching cars: ' + e)
    return null
  }
}

export async function fetchAPIcar ({ filter, token }) {
  const API_URL = import.meta.env.VITE_CAR_API_URI
  try {
    const data = await axios.post(
      `${API_URL}/cars/search`,
      { filter },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    return data
  } catch (e) {
    console.error('Error fetching cars: ' + e)
    return null
  }
}
