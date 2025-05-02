import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk, postProductsThunk } from '../../../../redux/reducers/productsSlice'
import style from './Products.module.scss'
const Products = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductsThunk())
    }, [])

    const products=useSelector((state) => state.products.products)

    const adtobasket=(data)=>{
        dispatch(postProductsThunk(data))
    }

  return (
    <div className={style.container}>
      <div className={style.carts}>
        {products && products.map(item =>{
            return <div className={style.cart}>
                <img src={item.thumbnail} alt="" />
                <h2>{item.title}</h2>
                <span>{item.price}</span>
                <button onClick={() => adtobasket(item)}>Ad to basket</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default Products
