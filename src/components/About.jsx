import React from 'react'
import { about } from '../data/content'
import { useRevealChildren } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const statsRef = useRevealChildren('[data-reveal]', 120)
  return (
    <section id="about" className={styles.about}>
      <div className="section-header section-header--dark">
        <span className="section-num">01 /</span>
        <h2 className="section-title section-title--light">About</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.body}>
          {about.body.map((p, i) => (
            <p key={i} className={styles.para} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div ref={statsRef}>
          {about.stats.map(({ num, label }) => (
            <div key={label} className={styles.stat} data-reveal>
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
