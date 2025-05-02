import React from 'react'
import style from './Footer.module.scss'
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>CLEVER</h2>
        <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart /> by Colorlib</p>
      </div>
    </div>
  )
}

export default Footer
