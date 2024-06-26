import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Logo navbar
        </div>
        <div className={styles.linkitem}>
            <Links/>
        </div>
    </div>
  )
}

export default Navbar