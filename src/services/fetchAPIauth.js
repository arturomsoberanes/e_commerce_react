import axios from 'axios'

export async function fetchAPILogin ({ dataUser }) {
  const API_URL = import.meta.env.VITE_CAR_API_URI
  try {
    const data = await axios.post(`${API_URL}/login`, {
      data: dataUser
    })
    return data
  } catch (e) {
    console.error('Error Login: ' + e)
    return e
  }
}
