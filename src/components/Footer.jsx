import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Stephan Kwapis. All rights reserved.</span>
      <span className={styles.tagline}>Keep Circulating The Tapes.</span>
    </footer>
  )
}
