import React from 'react'
import styles from '../navigation.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <a href="#">Dev Bhasha</a>
      </div>
      <div>
        <a href="">Blogs</a>
        <a href="">Team</a>
        <a href="">Events</a>
        <a href="">About</a>
        <a href="">Contact</a> 
      </div>
    </div>
  )
}

export default Navbar