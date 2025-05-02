import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletebasketThunk, getbasketThink } from '../../../redux/reducers/basketSlice'
import style from './BasketSection.module.scss'
const BasketSection = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getbasketThink())
    }, [])

    const basket=useSelector((state) => state.basket.basket)

    const deletebasket=(data)=>{
        dispatch(deletebasketThunk(data))
    }
  return (
    <div className={style.container}>
    <div className={style.carts}>
      {basket && basket.map(item =>{
          return <div className={style.cart}>
              <img src={item.thumbnail} alt="" />
              <h2>{item.title}</h2>
              <span>{item.price}</span>
              <button onClick={()=> deletebasket(item.id)}>Ad to basket</button>
          </div>
      })}
    </div>
  </div>
  )
}

export default BasketSection
