import React from 'react'
import {FavsWithQuery} from '../container/getFavorites'
import {Helmet} from 'react-helmet'
import { Layout } from '../components/layout'
export const Favs =()=>(
	<Layout title='Tus Favoritos' subtitle='Aqui estaran tus favoritos'>
	<FavsWithQuery/>
	</Layout>
	)