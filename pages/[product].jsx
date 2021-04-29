import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ImageComponent from '../components/ImageComponent';
import styles from '../styles/Home.module.css';

export default function Product() {
  const {
    query: { product },
  } = useRouter();
  const title = product?.charAt(0).toUpperCase() + product?.slice(1);

  return (
    <>
      {product && (
        <div className={styles.container}>
          <Head>
            <title>{title} - Shop Display</title>
          </Head>

          <motion.h1 layoutId={'header'}>{title}</motion.h1>
          <ImageComponent product={product} ratio={450} link={`/`} />
        </div>
      )}
    </>
  );
}
