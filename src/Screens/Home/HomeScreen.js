
// Import

import React, { Component } from 'react'
import {
    SafeAreaView,
    Button
  } from 'react-native'

import realm  from 'realm'

const Screens = {
    Home: 'Home',
    UserList: 'UserList',
    UserSubmission: 'UserSubmission'
}

// HomeScreen

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
      };

    // Constructor

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            realm: null
        }
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
           </SafeAreaView>
        )
    }
}

export default HomeScreen