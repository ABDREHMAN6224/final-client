"use client"
import React from 'react'
import styles from "./featured.module.css"
import {Newsreader} from "next/font/google"
import Product from './Product'
const newspaper = Newsreader({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
const data = [
  {
    id:1,
    image: "b1.webp",
    title: "Rouette Structuré Mini Bag",
  },
  {
    id:2,
    image: "b2.webp",
    title: "Rouette Structuré Mini Bag",
  },
  {
    id:3,
    image: "b2.webp",
    title: "Rouette Structuré Mini Bag",
  },
];
const Featured = ({title="what's new",products=data}) => {
  return (
    <div className={styles.container}>
      <h3 className={`${newspaper.className} ${styles.title}`}>{title}</h3>
      <div className={styles.products_container}>
        {products.map(d=>{
          return <Product key={d.id} image={d.image} title={d.title} />
        })}
      </div>
    </div>
  );
}

export default Featured