/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';

import HomeScreen from './Screens/Home/HomeScreen'
import DetailsScreen from './Screens/Details/DetailsScreen'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// APP

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
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
