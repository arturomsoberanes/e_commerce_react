import { Container, Spinner } from 'react-bootstrap'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'

function Login () {
  const { auth, login, loading } = useAuth()
  const [inputs, setInputs] = useState({
    userName: '',
    userPassword: ''
  })
  const [error, setError] = useState(false)

  const handleChangeUserName = (e) => {
    const userName = e.target.value
    setInputs({
      ...inputs,
      userName
    })
  }

  const handleChangePassword = (e) => {
    const userPassword = e.target.value
    setInputs({
      ...inputs,
      userPassword
    })

    if (inputs.userPassword.length < 3) {
      setError('La contraseña debe tener al menos 4 caracteres')
    } else {
      setError(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return
    const dataUser = {
      username: inputs.userName,
      password: inputs.userPassword
    }
    login({ dataUser })
  }

  if (auth) return <Navigate to='/' />

  if (loading) {
    return (
      <Container className='d-flex flex-column align-items-center'>
        <Spinner className='mt-5' animation='border' variant='warning' />
      </Container>
    )
  }
  return (
    <Container className='d-flex flex-column align-items-center'>
      <h1 className='mt-5'>Login</h1>
      <LoginForm
        inputs={inputs}
        error={error}
        handleSubmit={handleSubmit}
        handleChangePassword={handleChangePassword}
        handleChangeUserName={handleChangeUserName}
      />
    </Container>
  )
}
export default Login
