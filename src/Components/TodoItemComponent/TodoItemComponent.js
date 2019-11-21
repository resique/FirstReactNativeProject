import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { style } from './TodoItemComponentStyle'

class TodoItemComponent extends Component {
    render() {
      return (
        <View style = {style.todoItemStyle}>
          <Text style = {style.todoTitleStyle}>{this.props.title}</Text>
        </View>
      )
    }
  }

  export default TodoItemComponent