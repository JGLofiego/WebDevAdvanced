import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Contact from './components/Contacts'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Perks from './components/Perks'
import Reviews from './components/Reviews'
import Socials from './components/Socials'
import * as theme from './styles/allThemes'
import GlobalStyles from './styles/Global'

function App() {
  const [changeTheme, setChangeTheme] = useState(false)
  return (
    <ThemeProvider theme={changeTheme ? theme.dark : theme.light}>
      <GlobalStyles />
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Hero />
      <Perks />
      <Reviews />
      <Menu />
      <Contact />
      <Socials />
      <Footer />
    </ThemeProvider>
  )
}

export default App
