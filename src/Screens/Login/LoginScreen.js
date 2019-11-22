import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FBLoginButton from '../../Components/FBLoginButton/FBLoginButton'
import { Screens } from '../../Common/Screens'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login'
    }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
        <View>
        <FBLoginButton 
            navigateToHome = {() =>
                this.props.navigation.navigate(Screens.Home)
            }
        />
      </View>
    )
  }
}
