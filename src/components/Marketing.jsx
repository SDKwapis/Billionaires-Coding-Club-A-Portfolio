import React, { useState } from 'react'
import { caseStudies } from '../data/content'
import { useRevealChildren } from '../hooks/useReveal'
import styles from './Marketing.module.css'

function ImageModal({ item, onClose }) {
  if (!item) return null
  return (
    <div className={styles.imgOverlay} onClick={onClose}>
      <div className={styles.imgModal} onClick={e => e.stopPropagation()}>
        <button className={styles.imgClose} onClick={onClose}>✕</button>
        <img src={item.src} alt={item.alt} className={styles.imgModalImg} />
        {item.alt && <p className={styles.imgCaption}>{item.alt}</p>}
      </div>
    </div>
  )
}

export default function Marketing() {
  const [modalItem, setModalItem] = useState(null)
  const casesRef = useRevealChildren('[data-reveal]', 100)

  return (
    <section id="marketing" className={styles.marketing}>
      <div className="section-header section-header--dark">
        <span className="section-num">04 /</span>
        <h2 className="section-title section-title--light">Marketing Work</h2>
      </div>

      <div ref={casesRef}>
        {caseStudies.map((cs) => (
          <div key={cs.id} className={styles.caseStudy} data-reveal>
            {/* Header */}
            <div className={styles.csHeader}>
              <span className={styles.csLabel}>{cs.label}</span>
              <h3 className={styles.csTitle}>{cs.title}</h3>
              <p className={styles.csSub}>{cs.subtitle}</p>
            </div>

            {/* Body grid */}
            <div className={styles.csBody}>
              {/* Left: goals + description */}
              <div className={styles.csLeft}>
                <h4 className={styles.goalsHeading}>Campaign Goals</h4>
                <ul className={styles.goals}>
                  {cs.goals.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
                <div className={styles.description}>
                  {cs.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {cs.metrics && (
                  <div className={styles.metrics}>
                    {cs.metrics.map(m => (
                      <div key={m.label} className={styles.metric}>
                        <span className={styles.metricNum}>{m.num}</span>
                        <span className={styles.metricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: image grid */}
              <div className={styles.csRight}>
                <div className={styles.imgGrid}>
                  {cs.images.map((img, i) => (
                    <div key={i} className={styles.imgThumb}
                      onClick={() => setModalItem(img)}>
                      <img src={img.src} alt={img.alt} className={styles.thumbImg} />
                      <div className={styles.thumbOverlay}>
                        <span className={styles.thumbIcon}>⊕</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
    </section>
  )
}
