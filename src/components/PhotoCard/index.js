import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT__IMAGE =
  'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT__IMAGE }) => {
	const [show,ref]=useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}></a>
          <ImgWrapper className="">
            <Img src={src} alt="" />
          </ImgWrapper>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  )
}
