import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/index'
import {ListOfPhotoCard} from '../container/listOfPhotoCards'

export const Home = ({categoryId})=>{
	return (
		<><ListOfCategories  />
		<ListOfPhotoCard categoryId={categoryId}/>
  </>
	)
}