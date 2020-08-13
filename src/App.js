import React, { useContext } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Detail } from './pages/Detail'
import {NotFound} from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import {Context} from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle  />
      <Logo />
      <Router>
				<NotFound default/>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

     {/*  {isAuth ? (
        <Router>
          <Favs path="/favs" />
          <User path="/user" />
        </Router>
      ) : (
        <Router>
          <NotRegisterUser path="/favs" />
          <NotRegisterUser path="/user" />
        </Router>
      )} */}

      <NavBar />
    </>
  )
}
