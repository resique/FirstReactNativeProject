import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { todoItemComponentStyle } from './TodoItemComponentStyle'

class TodoItemComponent extends Component {
    render() {
      return (
        <View style = {todoItemComponentStyle.todoItemStyle}>
          <Text style = {todoItemComponentStyle.todoTitleStyle}>{this.props.title}</Text>
        </View>
      )
    }
  }

  export default TodoItemComponent