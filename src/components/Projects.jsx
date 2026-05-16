import React, { useState } from 'react'
import { projects } from '../data/content'
import { useRevealChildren } from '../hooks/useReveal'
import Lightbox from './Lightbox'
import styles from './Projects.module.css'

export default function Projects() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const gridRef = useRevealChildren('[data-reveal]', 60)

  const openGallery = (gallery) =>
    setLightbox({ open: true, images: gallery, index: 0 })

  const close  = () => setLightbox(l => ({ ...l, open: false }))
  const next   = () => setLightbox(l => ({ ...l, index: (l.index + 1) % l.images.length }))
  const prev   = () => setLightbox(l => ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length }))

  return (
    <section id="projects" className={styles.projects}>
      <div className="section-header">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className={styles.grid} ref={gridRef}>
        {projects.map((p) => {
          const hasGallery = Array.isArray(p.gallery) && p.gallery.length > 0
          const hasLink    = typeof p.link === 'string'

          const card = (
            <div className={styles.card} data-reveal key={p.id}
              onClick={hasGallery ? () => openGallery(p.gallery) : undefined}
              style={{ cursor: hasGallery || hasLink ? 'pointer' : 'default' }}
            >
              <div className={styles.thumb}>
                <img src={p.image} alt={p.name} className={styles.img} />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    {hasGallery ? 'View Gallery' : hasLink ? 'Visit Site' : 'View'}
                  </span>
                </div>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <span className={styles.type}>{p.type}</span>
                </div>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.pills}>
                  {p.stack.map(s => <span key={s} className="pill">{s}</span>)}
                </div>
              </div>
            </div>
          )

          return hasLink ? (
            <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
              {/* Re-render card without data-reveal since anchor wraps it */}
              <div className={styles.card} data-reveal>
                <div className={styles.thumb}>
                  <img src={p.image} alt={p.name} className={styles.img} />
                  <div className={styles.overlay}>
                    <span className={styles.overlayText}>Visit Site ↗</span>
                  </div>
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaTop}>
                    <span className={styles.type}>{p.type}</span>
                  </div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.desc}>{p.description}</p>
                  <div className={styles.pills}>
                    {p.stack.map(s => <span key={s} className="pill">{s}</span>)}
                  </div>
                </div>
              </div>
            </a>
          ) : card
        })}
      </div>

      {lightbox.open && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  )
}
