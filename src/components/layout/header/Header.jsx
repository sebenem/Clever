import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.scss'
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link to='/'>
          <h2>CLEVER</h2> 
        </Link>
     
      </div>
      <div className={style.navbar}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/basket">BASKET</a></li>
            <li><a href="/admin">ADMIN</a></li>
            <li><a href="">Instructors</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className={style.batn}>
        <button>REGISTER</button>
        <button>LOGIN</button>
      </div>
    </div>
  )
}

export default Header
