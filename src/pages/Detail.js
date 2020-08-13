import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardQuery'
import { Layout } from '../components/layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Fotografia ${detailId}`} >
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
