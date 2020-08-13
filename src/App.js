import React, { useContext,Suspense } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
// import { Home } from './pages/Home'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Detail } from './pages/Detail'
// import {NotFound} from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import {Context} from './Context'
const Favs =React.lazy(()=>import('./pages/Favs'))
const Home =React.lazy(()=>import('./pages/Home'))
const NotFound =React.lazy(()=>import('./pages/NotFound'))
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div/>}>
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
      <NavBar />
    </Suspense>
  )
}
