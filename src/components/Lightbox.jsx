import React, { useEffect, useCallback } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft')  onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!images?.length) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.inner} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          className={styles.img}
        />
        <div className={styles.controls}>
          <button className={styles.navBtn} onClick={onPrev} aria-label="Previous">◀</button>
          <span className={styles.counter}>{index + 1} / {images.length}</span>
          <button className={styles.navBtn} onClick={onNext} aria-label="Next">▶</button>
        </div>
      </div>
    </div>
  )
}
