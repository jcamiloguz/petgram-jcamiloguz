import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/registerMutation'
import { LoginMutation } from '../container/LoginMutation'
import { loginMutation} from '../container/LoginMutation'


export const NotRegisterUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
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
					{
						(login,{data,loading,error})=>{
							const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(activateAuth)
              }

              const errorMsg = error && `ERROR email o password incorrecta`

							return (
								<UserForm error={errorMsg} disabled={loading} title="Iniciar Sesion" onSubmit={onSubmit} />
							)
						}
					}
          </LoginMutation>
        </>
      )
    }}
  </Context.Consumer>
)
