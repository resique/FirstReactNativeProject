
// Import

import React, { Component } from 'react'

import {
    SafeAreaView,
    Button,
    TextInput
  } from 'react-native'

import realm  from 'realm'

import { style } from './UserSubmissionStyle'
import UserSchema from '../../Schemes/UserScheme'

// UserSubmission

class UserSubmission extends Component {

    // Actions

    submitAction() {
        realm.open({schema: [UserSchema]}).then(realm => {
            realm.write(() => {
                const newUser = realm.create('User', {
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password
                })
            })
        }).catch(error => {
            console.log('REALM ERROR:')
            console.log(error)
        })
    }

    // Render

    render() {
        return (
            <SafeAreaView>
                <TextInput
                    style = {style.textInputStyle}
                    placeholder = {'email'}
                    onChangeText = { text => this.setState({
                        email: text
                    })}
                />

                <TextInput
                    style = {style.textInputStyle}
                    placeholder = {'username'}
                    onChangeText = { text => this.setState({
                        username: text
                    })}
                />
                    
                <TextInput
                    style = {style.textInputStyle}
                    placeholder = {'password'}
                    onChangeText = { text => this.setState({
                        password: text
                    })}
                />

                <Button
                    title = 'Submit'
                    onPress = {() =>
                        this.submitAction()
                    }
                />
            </SafeAreaView>
        )
    }
}

export default UserSubmission