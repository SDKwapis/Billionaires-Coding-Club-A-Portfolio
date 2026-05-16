import React from 'react'
import { skills } from '../data/content'
import { useRevealChildren } from '../hooks/useReveal'
import styles from './Skills.module.css'

export default function Skills() {
  const gridRef = useRevealChildren('[data-reveal]', 50)
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-header">
        <span className="section-num">02 /</span>
        <h2 className="section-title">Skills</h2>
      </div>
      <div className={styles.grid} ref={gridRef}>
        {skills.map(({ id, name, years, image }) => (
          <div key={id} className={styles.card} data-reveal>
            <div className={styles.imgWrap}>
              <img src={image} alt={name} className={styles.img} />
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.years}>{years}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
