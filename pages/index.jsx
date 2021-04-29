import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ImageComponent from '../components/ImageComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState(['shoe', 'watch', 'headphones']);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop Display</title>
      </Head>

      <motion.h1 layoutId={'header'}>Shop Display</motion.h1>
      <div className={styles['product-container']}>
        {products.map((product, index) => (
          <ImageComponent
            key={index}
            product={product}
            ratio={300}
            link={`/${product}`}
          />
        ))}
      </div>
    </div>
  );
}
