import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardQuery'


export const Detail=({detailId})=>{
	return  <PhotoCardWithQuery id={detailId}/>
}