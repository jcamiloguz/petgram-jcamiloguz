import React, { useContext } from 'react'
import {Context} from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/registerMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg = error && `ERROR El usuario ya existe `

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg = error && `ERROR email o password incorrecta`

          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              title="Iniciar Sesion"
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </>
  )
}
