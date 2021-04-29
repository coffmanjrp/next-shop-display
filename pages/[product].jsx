import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Product() {
  const {
    query: { product },
  } = useRouter();
  const productTitle = product.charAt(0).toUpperCase() + product.slice(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>{productTitle} - Shop Display</title>
      </Head>

      <h1>{productTitle}</h1>
      <Image
        src={`/${product}.jpg`}
        alt={productTitle}
        width={300}
        height={300}
        className={styles.image}
      />
    </div>
  );
}
