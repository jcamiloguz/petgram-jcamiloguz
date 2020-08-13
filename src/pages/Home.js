import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/index'
import {ListOfPhotoCard} from '../container/listOfPhotoCards'
import {Helmet} from 'react-helmet'

export const Home = ({categoryId})=>{
	return (
		<>
		<Helmet>
			<title>Pettgram-Home</title>
			<meta name='description' content='Fotos de tus mascotas'/>
		</Helmet>
		<ListOfCategories  />
		<ListOfPhotoCard categoryId={categoryId}/>
  </>
	)
}