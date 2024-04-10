"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navlink.module.css'
import { usePathname } from 'next/navigation'
function Navlink({item}) {
    const pathName = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
  )
}

export default Navlink