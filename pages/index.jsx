import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState(['shoe', 'watch', 'headphones']);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop Display</title>
      </Head>

      <h1>Shop Display</h1>
      <div className={styles['product-container']}>
        {products.map((product, index) => (
          <Link href={`/${product}`} key={index}>
            <a>
              <Image
                src={`/${product}.jpg`}
                alt={product}
                width={300}
                height={300}
                className={styles.image}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
