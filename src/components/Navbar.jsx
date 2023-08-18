"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {FaEye,FaMapMarkerAlt,FaSearch,FaChevronDown} from "react-icons/fa"
import styles from "./navbar.module.css"
import { useAppContext } from '../../context/context'
const Navbar = () => {
  const {color,handleScroll,border}=useAppContext()
  if(typeof window !== "undefined"){
    window.addEventListener('scroll',handleScroll)
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_container} style={{ background: color }}>
        <div className={styles.icons}>
          <Link href="/store">
            <FaMapMarkerAlt className={styles.icon} />
          </Link>
          <FaEye className={styles.icon} />
        </div>
        <div className={styles.title}>
          <h3 className={styles.head}>goyard</h3>
          <p className={styles.sub_title}>paris</p>
        </div>
        <div className={styles.options}>
          <div className={styles.first}>
            <p>eu . en</p>
            <FaChevronDown />
          </div>
          <FaSearch />
        </div>
      </div>
      <div className={styles.down_container} style={{ background: color ,borderTop:border}}>
        <Link href={"/"}>Catalogue</Link>
        <Link href={"/"}>personalization</Link>
        <Link href={"/"}>maison goyard</Link>
        <Link href={"/"}>boutiques</Link>
      </div>
    </div>
  );
}

export default Navbar
