"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {FaEye,FaMapMarkerAlt,FaSearch,FaChevronDown,FaBars} from "react-icons/fa"
import styles from "./navbar.module.css"
import { useAppContext } from '../../context/context'
import SmallBar from './SmallBar'
const Navbar = () => {
  const {color,handleScroll,border}=useAppContext()
  if(typeof window !== "undefined"){
    window.addEventListener('scroll',handleScroll)
  }
  const { smallBarOpen,toggleBar,displaybar } = useAppContext();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav_container} style={{ background: color }}>
          <div className={styles.icons}>
            <Link href="/store">
              <FaMapMarkerAlt className={styles.icon} />
            </Link>
            <Link href="/">
              <FaEye className={styles.icon} />
            </Link>{" "}
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
          <FaBars className={styles.bars} onClick={toggleBar} />
        </div>
        <div
          className={styles.down_container}
          style={{ background: color, borderTop: border,visibility:displaybar}}
        >
          <Link href={"/"}>Catalogue</Link>
          <Link href={"/"}>personalization</Link>
          <Link href={"/"}>maison goyard</Link>
          <Link href={"/"}>boutiques</Link>
        </div>
        {smallBarOpen && <SmallBar close={toggleBar}/>}
      </div>
    </>
  );
}

export default Navbar
