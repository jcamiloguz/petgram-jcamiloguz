import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/index'
import {ListOfPhotoCard} from '../container/listOfPhotoCards'
import {Helmet} from 'react-helmet'

 const HomePage = ({categoryId})=>{
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

export const Home = React.memo(HomePage,(prevProps,props)=>{
	return prevProps.categoryId === props.categoryId
})