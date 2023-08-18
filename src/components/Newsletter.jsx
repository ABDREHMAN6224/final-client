import React from 'react'
import styles from "./newsletter.module.css"
import Image from 'next/image'
import { Newsreader } from 'next/font/google'
const reader = Newsreader({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
const Newsletter = () => {
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.content}>
          <h2>THE GOYARD GAZETTE</h2>
          <p className={reader.className}>
            Subscribe to the Gazette and be the first to receive the latest news
            from Maison Goyard
          </p>
          <form action="">
            <input type="text" placeholder="Your Email Address" name="email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={"/book.gif"} width={300} height={300} alt="book" />
      </div>
    </div>
  );
}

export default Newsletter