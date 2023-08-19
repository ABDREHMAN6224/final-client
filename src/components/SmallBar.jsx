import React from 'react'
import styles from "./small.module.css"
import Link from 'next/link';
import {
  FaEye,
  FaMapMarkerAlt,

} from "react-icons/fa";

const SmallBar = ({close}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link href="/store" onClick={close} >
          <FaMapMarkerAlt className={styles.icon} />
        </Link >
        <Link href="/" onClick={close}>
        <FaEye className={styles.icon} />
        </Link>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href={"/"} onClick={close}>Catalogue</Link>
        </li>
        <li>
          <Link href={"/"} onClick={close}>personalization</Link>
        </li>
        <li>
          <Link href={"/"} onClick={close}>maison goyard</Link>
        </li>
        <li>
          <Link href={"/"} onClick={close}>boutiques</Link>
        </li>
      </ul>
    </div>
  );
}

export default SmallBar