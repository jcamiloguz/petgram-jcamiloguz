import React from 'react'
import { ListOfCategories } from './components/listOfCategories/index'
import { GlobalStyle } from './styles/globalStyles'
import {ListOfPhotoCard} from './components/ListOfPhotoCard'
import {Logo} from './components/Logo'
export const App = () => (
	<>
		<Logo/>
    <GlobalStyle />
    <ListOfCategories />
		<ListOfPhotoCard/>
  </>
)
