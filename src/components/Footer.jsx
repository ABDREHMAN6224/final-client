// "use client"
import React from 'react'
import styles from "./footer.module.css"
import { Newsreader } from "next/font/google";
import Image from 'next/image';
import {FaInstagram,FaYoutube,FaTwitter,FaFacebook,FaWeibo} from "react-icons/fa"
const reader = Newsreader({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.form}>
          <div className={styles.content}>
            <h2>THE GOYARD GAZETTE</h2>
            <p className={reader.className}>
              Subscribe to the Gazette and be the first to receive the latest
              news from Maison Goyard
            </p>
            <form action="">
              <input
                type="text"
                placeholder="Your Email Address"
                name="email"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className={styles.company_desc}>
          <Image src={"/logo.svg"} width={150} height={125} alt="logo" />
          <div className={styles.links}>
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaFacebook />
            <FaWeibo />
          </div>
          <p>
            Cookies policy . Legal information <br />
            Accessibility . General terms and conditions <br /> Privacy policy .
            Cookies
          </p>
        </div>

        <div className={styles.closing}>
          <h2>CUSTOMER SERVICE</h2>
          <p className={reader.className}>
            Products & Sales Information <br />
            After-sales Service
            <br />
            Career & Press <br />
            Taking care of your Goyard
            <br />
            FAQ
          </p>
          <h2>GOYARD BOUTIQUES</h2>
          <p>Find a store</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} Goyard. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer