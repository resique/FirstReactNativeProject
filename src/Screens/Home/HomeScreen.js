
// Import

import React, { Component } from 'react'
import {
    SafeAreaView,
    Button
  } from 'react-native'

import { LoginManager } from 'react-native-fbsdk'
import { Screens } from '../../Common/Screens'

// HomeScreen

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerLeft : null
      }

    // Constructor

    constructor(props) {
        super(props)
    }

    // Methods

    navigateTo(screen) {    
        this.props.navigation.navigate(screen)
    }

    // Render

    render() {
        const {navigate} = this.props.navigation
        return (
           <SafeAreaView>
               <Button
                    title = 'Submit new user'
                    onPress = {() =>
                        this.navigateTo(Screens.UserSubmission)
                    }
               />

                <Button
                    title = 'Show users'
                    onPress = {() =>
                        this.navigateTo(Screens.UserList)
                    }
               />

                <Button
                    title = 'Logout'
                    onPress = {() =>  {
                            this.navigateTo(Screens.Login)
                            LoginManager.logOut()
                        }
                    }
                />
           </SafeAreaView>
        )
    }
}

export default HomeScreen