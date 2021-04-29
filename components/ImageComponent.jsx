import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

export default function ImageComponent({ product, link, ratio }) {
  const title = product?.charAt(0).toUpperCase() + product?.slice(1);

  return (
    <>
      {product && (
        <Link href={link}>
          <a>
            <motion.figure
              className={styles.image}
              layoutId={product}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={`/${product}.jpg`}
                alt={title}
                width={ratio}
                height={ratio}
              />
            </motion.figure>
          </a>
        </Link>
      )}
    </>
  );
}
