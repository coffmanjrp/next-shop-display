import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
          <Link href={`/${product}`} key={index}>
            <a>
              <motion.figure
                className={styles.image}
                layoutId={product}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={`/${product}.jpg`}
                  alt={product}
                  width={300}
                  height={300}
                />
              </motion.figure>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
