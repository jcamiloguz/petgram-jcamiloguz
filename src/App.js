import React from 'react'
import { ListOfCategories } from './components/listOfCategories/index'
import { GlobalStyle } from './styles/globalStyles'
import {ListOfPhotoCard} from './container/listOfPhotoCards'
import {Logo} from './components/Logo'
import { PhotoCardWithQuery } from './container/photoCardQuery'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId=urlParams.get('detail')
	return(
		<>
    <GlobalStyle />
		<Logo/>
		{
			detailId
		?<PhotoCardWithQuery id={detailId}/>
			:<><ListOfCategories  />
		<ListOfPhotoCard categoryId={''}/>
  </>
		}
  </>
	)
}