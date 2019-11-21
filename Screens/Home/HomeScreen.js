import React, { Component } from 'react'

import {
    SafeAreaView,
  } from 'react-native'

import TodoListComponent from '../../Components/TodoListComponent/TodoListComponent'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
      };

    navigateToDetails(item) {
        this.props.navigation.navigate('Details', {
            user: item
        })
    }
    
    render() {
        const {navigate} = this.props.navigation
        return (
           <SafeAreaView>
               <TodoListComponent navigateToDetails = { this.navigateToDetails.bind(this) }/>
           </SafeAreaView>
        )
    }
}

export default HomeScreen;