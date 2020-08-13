import React from 'react'
import {FavsWithQuery} from '../container/getFavorites'
import {Helmet} from 'react-helmet'
import { Layout } from '../components/layout'
export default ()=>(
	<Layout title='Tus Favoritos' subtitle='Aqui estaran tus favoritos'>
	<FavsWithQuery/>
	</Layout>
	)