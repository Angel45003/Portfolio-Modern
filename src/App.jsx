import React from 'react'
import Nav from './components/Nav'
import BannerMain from './components/BannerMain'
import BackgroundStars from './components/BackgroundStars'
import BannerSkills from './components/BannerSkills'
import BannerSecurity from './components/BannerSecurity'
import BannerProjects from './components/BannerProjects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <BannerMain />
      <BannerSkills />
      <BannerSecurity />
      <BannerProjects />
      <Footer />
      <BackgroundStars />
    </div>
  )
}
