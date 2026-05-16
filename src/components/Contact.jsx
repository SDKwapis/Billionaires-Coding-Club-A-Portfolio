import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { meta } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const headRef = useReveal()
  const formRef = useReveal({ threshold: 0.15 })

  const [form, setForm]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState(null)
  const [sending, setSending]     = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    emailjs
      .send(
        meta.emailjs.serviceId,
        meta.emailjs.templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        meta.emailjs.userId
      )
      .then(() => {
        setSubmitted(true)
        setSending(false)
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setError('There was a problem sending your message. Please try again.')
        setSending(false)
      })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={`${styles.headline} reveal`} ref={headRef}>
          Let's<br /><span className={styles.accentWord}>Talk.</span>
        </h2>

        <p className={styles.subhead}>
          Want to chat about a collaboration, a project, or your favorite Dragon Ball Z arc? I'm in.
        </p>

        <div className={`${styles.formWrap} reveal`} ref={formRef}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <p>Message sent. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <p className={styles.error}>{error}</p>}

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    className={styles.input}
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    className={styles.input}
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message" name="message" rows="5"
                  value={form.message} onChange={handleChange} required
                />
              </div>

              <button type="submit" className={styles.submit} disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}

          <div className={styles.altLinks}>
            <a href={`mailto:${meta.email}`} className={styles.altLink}>
              {meta.email}
            </a>
            <a href={meta.linkedin} target="_blank" rel="noreferrer" className={styles.altLink}>
              LinkedIn
            </a>
            <a href={meta.github} target="_blank" rel="noreferrer" className={styles.altLink}>
              GitHub
            </a>
            <a href={meta.resume} target="_blank" rel="noreferrer" className={styles.altLink}>
              Résumé ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
