import React, { Component } from 'react'
import {
    SafeAreaView,
    FlatList,
    TouchableHighlight
  } from 'react-native'

import realm  from 'realm'

import UserSchema from '../../Schemes/UserScheme'
import TodoItemComponent from '../../Components/TodoItemComponent/TodoItemComponent'

class UserList extends Component {
    static navigationOptions = {
        title: 'User List',
    };

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            realm: null
        }
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        realm.open({schema: [UserSchema]}).then(realm => {
            const users = realm.objects('User')
            this.setState({
                dataSource: users
            })
        })
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView>
               <FlatList
                    data = {this.state.dataSource}
                    renderItem = {( ({item}) =>
                    <TouchableHighlight>
                        <TodoItemComponent title = {item.username} />
                    </TouchableHighlight>
                    )}
                    keyExtractor = {() => Math.random().toString() }
                />
            </SafeAreaView>
        )
    }
}

export default UserList