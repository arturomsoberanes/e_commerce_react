import { Form, Button } from 'react-bootstrap'
function LoginForm ({
  inputs,
  error,
  handleSubmit,
  handleChangePassword,
  handleChangeUserName
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='userName'>
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter username...'
          value={inputs.userName}
          onChange={handleChangeUserName}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='userPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password...'
          value={inputs.userPassword}
          onChange={handleChangePassword}
          className={error && 'border border-danger'}
        />
        <Form.Text className='text-danger'>
          {error && error}
        </Form.Text>
      </Form.Group>
      <div className='text-center'>
        <Button variant='warning' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  )
}
export default LoginForm
