import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])

	const [loading, setLoading]=useState(false)
  useEffect(() => {
		setLoading(true)
    fetch('https://petgram-server-jcamiloguz.jcamiloguz.vercel.app/categories')
		.then((res) => res.json())
		.then((response) => {
			setCategories(response)
			setLoading(false)
		})
  }, [])
  return { categories,loading }
}

 const ListOfCategoriesComponent = () => {

	const { categories,loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
				{
					(loading)
					? <h1>Cargando...</h1>
					:	categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    )
  }

  return (
    <Fragment>

      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
 export const ListOfCategories =React.memo(ListOfCategoriesComponent)