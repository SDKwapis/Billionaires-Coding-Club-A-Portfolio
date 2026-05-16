import React from 'react'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Marketing from './components/Marketing'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Marketing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
