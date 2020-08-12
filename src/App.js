import React from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Detail } from './pages/Detail'

import { Router } from '@reach/router'
import Context from './Context'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs" />
              <NotRegisterUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
