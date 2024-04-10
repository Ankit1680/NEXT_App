"use client"
import React, { useState } from 'react'
import Link from "next/link"
import styles from './links.module.css'
import Navlink from './navLink/Navlink'
function Links() {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    const [open,setOpen] = useState(false);

    const session =true;
    const isAdmin = true;


    return (

        <div>
        <div className={styles.links}>
            {links.map((link) => (
                <Navlink item={link} key={link.title}/>
            ))}{
                session ? (
                   <>
                       { isAdmin && (
                        <Navlink item={{title:"Admin", path:"/admin" }}/>
                        )}
                        <button className={styles.logout}>Logout</button>
                   </>
                ) : ( 
                    <Navlink item={{title: "Login", path:"/login"}}/>
                )
            }
        </div>
        <button className={styles.Menubtn} onClick={()=> setOpen((prev)=> !prev)}>Menu</button>
        {open && (<div className={styles.mobileLink}>
            
            {
                links.map((link)=>(
                    <Navlink item={link} key={link.title}/>
                ))
            }
            </div>)}
        </div>
    )
}

export default Links
