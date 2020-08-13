import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import {Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT__IMAGE =
  'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


	export const PhotoCard = ({ id,liked, likes = 0, src = DEFAULT__IMAGE }) => {
  const [show, ref] = useNearScreen()  
  return (
		<Article ref={ref}>
      {show && (
				<Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper className="">
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
					<ToggleLikeMutation >
						{
							(toggleLike)=>{
								const handleFavClick = () => {
									toggleLike({variables:{
										input:{id}
									}})
								}
								return <FavButton
								onClick={handleFavClick}
								liked={liked}
								likes={likes}
							></FavButton>
							}
						}
					</ToggleLikeMutation>
          
        </Fragment>
      )}
    </Article>
  )
}
PhotoCard.propTypes={
	id:PropTypes.string.isRequired,
	liked:PropTypes.bool.isRequired,
	src:PropTypes.string.isRequired,
	likes:(props,propName,componentName)=>{
		const propValue= props[propName]
		if(propValue===undefined){
		return new Error (`${propName} value must be defined`)}
		if(propValue<0){
		return new Error (`${propName} value must be greater than 0`)}
	}
	,
}