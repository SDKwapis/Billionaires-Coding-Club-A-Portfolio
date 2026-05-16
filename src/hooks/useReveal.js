import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export function useRevealChildren(selector = '[data-reveal]', staggerMs = 80) {
  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const children = [...container.querySelectorAll(selector)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = children.indexOf(entry.target)
            entry.target.style.transitionDelay = `${idx * staggerMs}ms`
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    children.forEach((child) => {
      child.classList.add('reveal')
      observer.observe(child)
    })
    return () => observer.disconnect()
  }, [selector, staggerMs])
  return containerRef
}
