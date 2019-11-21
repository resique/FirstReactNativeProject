import React, { Component } from 'react'
import {
    SafeAreaView,
    Text
  } from 'react-native'

class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView>
               <Text>{navigation.getParam('user').name}</Text>
            </SafeAreaView>
        )
    }
}

export default DetailsScreen