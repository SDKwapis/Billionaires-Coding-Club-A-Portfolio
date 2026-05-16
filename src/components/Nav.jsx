import React, { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Contact',   href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>SK</a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className={styles.link} onClick={close}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barX1 : styles.bar} />
        <span className={menuOpen ? styles.barX2 : styles.bar} />
        <span className={menuOpen ? styles.barX3 : styles.bar} />
      </button>
    </nav>
  )
}
