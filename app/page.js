'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Home.module.css';
import userInfo from './user_info';
import '../styles/globals.css';

export default function Home() {
  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
    '/images/photo8.jpg',
    '/images/photo9.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  // Защита от копирования и скриншотов
  useEffect(() => {
    const preventCopy = (e) => {
      e.preventDefault();
      alert('Copying or saving images is not allowed.');
    };

    const preventContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('contextmenu', preventContextMenu);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('contextmenu', preventContextMenu);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nika Maric</title>
        <meta name="description" content="Portfolio of Nika Maric" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Nika Maric</h1>
        <h2 className={styles.subtitle}>Your hot girl next door</h2>
      </header>

      <main className={styles.main}>
        <div className={styles.galleryContainer}>
          <div className={styles.gallery}>
            <AnimatePresence mode="wait">
              <div className={styles.watermarkWrapper}>
                <motion.img
                  key={photos[currentIndex]}
                  src={photos[currentIndex]}
                  alt={`Nika Maric ${currentIndex + 1}`}
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.15, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className={styles.protectedImage}
                />
                <span className={styles.watermark}>Nika Maric</span>
              </div>
            </AnimatePresence>
          </div>
          <div className={styles.thumbnails}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>
            Hi Gentlemen,
            <br /><br />
            My name is Nika, and I am an Eastern European woman with a preference for pleasure.
            I have a deep appreciation of beautiful things and enjoy surrounding myself with elegance and comfort.
            With me, you will always feel first class.
            <br /><br />
            I have traveled the world and consider myself a cultured person, able to engage in captivating conversations for dinner dates or longer arrangements.
            <br /><br />
            I am fun-loving and very affectionate. Intimacy and connection are extremely important to me.
            With me, you will feel loved, desired, and entertained in ways unlike any other.
            <br /><br />
            Now that you are here, take a step further and text me.
            <br /><br />
            Yours,<br />
            <strong>Nika Maric</strong>
          </p>
        </section>

        <section id="appearance" className={styles.section}>
          <h2>Appearance</h2>
          <div className={styles.appearanceContainer}>
            <div className={styles.appearanceLeft}>
              <p><strong>Ethnicity:</strong> <span className={styles.appearanceValue}>White</span></p>
              <p><strong>Age:</strong> <span className={styles.appearanceValue}>29</span></p>
              <p><strong>Body Type:</strong> <span className={styles.appearanceValue}>Athletic</span></p>
              <p><strong>Eye Color:</strong> <span className={styles.appearanceValue}>Hazel</span></p>
            </div>
            <div className={styles.appearanceRight}>
              <p><strong>Tattoos:</strong> <span className={styles.appearanceValue}>No</span></p>
              <p><strong>Height:</strong> <span className={styles.appearanceValue}>5.7 ft</span></p>
              <p><strong>Breast Cup:</strong> <span className={styles.appearanceValue}>34B</span></p>
              <p><strong>All Natural Body:</strong> <span className={styles.appearanceValue}>No augmentations</span></p>
            </div>
          </div>
        </section>

        <section id="donation" className={styles.section}>
          <h2>Donation</h2>
          <ul className={styles.donationList}>
            {userInfo.donations.map((donation, index) => (
              <li key={index}>{donation.text}</li>
            ))}
          </ul>
          <h3 className={styles.contactTitle}>Contact information</h3>
          <ul className={styles.donationLinks}>
            {userInfo.contact.map((item, index) => (
              <li key={index}>
                {item.text}: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}