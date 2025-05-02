import React from 'react'
import Layout from '../../components/layout/Layout'
import Products from './components/products/Products'
import Together from './components/together/Together'

const Home = () => {
  return (
   <Layout>
    <Together/>
    <Products/>
   </Layout>
  )
}

export default Home
