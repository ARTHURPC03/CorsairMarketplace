import 'react-native-gesture-handler'

import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import ThemeSwitcher from './components/ThemeSwitcher'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'
import AppContainer from './hooks'

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <Routes />
        <ThemeSwitcher toggleTheme={toggleTheme} />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
