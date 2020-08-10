import React from 'react'
import {PhotoCard} from '../PhotoCard/index'


export const ListOfPhotoCard =()=>{
	return (
		<ul>
			{[1,2,3,4,5,6,7,8].map(id=>{
				return <PhotoCard key={id} id={id}/>

			})}
		</ul>
	)
}