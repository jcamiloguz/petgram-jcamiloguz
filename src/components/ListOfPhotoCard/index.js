import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

export const listOfPhotoCardComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {photos.map((photo) => {
        return <PhotoCard key={photo.id} {...photo} />
      })}
    </ul>
  )
}
