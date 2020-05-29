import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Image } from 'react-native'

import FeatherIcon from 'react-native-vector-icons/Feather'

import { ThemeContext } from 'styled-components'

import Dashboard from '../pages/Dashboard'
import Cart from '../pages/Cart'

import Logo from '../assets/logo.png'

const App = createStackNavigator()

const AppRoutes: React.FC = () => {
  const { title } = useContext(ThemeContext)
  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: title === 'dark' ? '#0d0d0d' : '#EBEEF8',
        },
      }}
      initialRouteName="Dashboard"
    >
      <App.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Image source={Logo} />,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => <Image source={Logo} />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },

          headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
        }}
        name="Cart"
        component={Cart}
      />
    </App.Navigator>
  )
}

export default AppRoutes
