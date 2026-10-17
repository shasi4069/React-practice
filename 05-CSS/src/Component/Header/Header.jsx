import React from 'react'
import style from './Header.module.css'
function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.logo}>this is a header</h1>
      <button className={style.login}>Login</button>
    </div>
  )
}

export default Header
