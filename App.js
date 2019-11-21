/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'

import HomeScreen from './src/Screens/Home/HomeScreen'
import UserList from './src/Screens/UserList/UserList'
import UserSubmission from './src/Screens/UserSubmission/UserSubmission'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// APP

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    UserList: {screen: UserList},
    UserSubmission: {screen: UserSubmission}
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
