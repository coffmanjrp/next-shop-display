import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function Product() {
  const {
    query: { product },
  } = useRouter();
  const productTitle = product?.charAt(0).toUpperCase() + product?.slice(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>{productTitle} - Shop Display</title>
      </Head>

      <motion.h1 layoutId={'header'}>{productTitle}</motion.h1>
      <Link href="/">
        <a>
          <motion.figure className={styles['big-image']} layoutId={product}>
            <Image
              src={`/${product}.jpg`}
              alt={productTitle}
              width={450}
              height={450}
            />
          </motion.figure>
        </a>
      </Link>
    </div>
  );
}
