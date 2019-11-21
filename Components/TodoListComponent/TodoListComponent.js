
import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator, TouchableHighlight } from 'react-native'

import TodoItemComponent from '../TodoItemComponent/TodoItemComponent'

class TodoListComponent extends Component {
    _isMounted = false

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    
    async componentDidMount() {
        this._isMounted = true
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const responseJson = await response.json()
            this.setState({
                isLoading: false,
                dataSource: responseJson
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    
    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        // Show activity indicator while loading
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }
    
        // Show list of todos when loaded
        return (
            <FlatList
                data = {this.state.dataSource}
                renderItem = {( ({item}) =>
                <TouchableHighlight onPress = {() => this.props.navigateToDetails(item)}>
                    <TodoItemComponent title = {item.name} />
                </TouchableHighlight>
                )}
                keyExtractor = { item => item.id.toString() }
            />
        )
    }
  }

  export default TodoListComponent