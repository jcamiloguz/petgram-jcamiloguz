import React from 'react'
import { UseInputValue } from '../../hooks/useInput'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton/index'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = UseInputValue('')
  const password = UseInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value,
    })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{disabled}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
