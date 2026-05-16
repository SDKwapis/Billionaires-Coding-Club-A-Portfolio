import React, { useEffect, useRef } from 'react'
import { meta, heroTags } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-fade]')
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.14}s`
      el.classList.add(styles.fadeIn)
    })
  }, [])

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <div className={styles.left}>
        <p className={styles.eyebrow} data-fade>
          {meta.location} &nbsp;·&nbsp; {meta.title}
        </p>
        <h1 className={styles.name} data-fade>
          Stephan
          <br />
          <span className={styles.accent}>Kwapis</span>
        </h1>
        <p className={styles.desc} data-fade>
          <strong>15+ years</strong> as a versatile marketing and digital
          operations professional.
        </p>
        <div className={styles.ctaRow} data-fade>
          <a href="#projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get in Touch
          </a>
        </div>
        <div className={styles.tags} data-fade>
          {heroTags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.right} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.badge} data-fade>
          <div className={styles.badgeCircle}>
            <span className={styles.badgeStat}>15+</span>
            <span className={styles.badgeLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
