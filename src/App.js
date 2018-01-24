import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import {
  Header,
  Button,
  Spinner,
  CardSection,
  StatusBarBackground
} from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0krU_qUTtT8fxv3fqFs6BOZkz7iwso7I',
      authDomain: 'auth-3f9f8.firebaseapp.com',
      databaseURL: 'https://auth-3f9f8.firebaseio.com',
      projectId: 'auth-3f9f8',
      storageBucket: 'auth-3f9f8.appspot.com',
      messagingSenderId: '1001661237199'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        )
    }
  }

  render() {
    return (
      <View>
        <StatusBarBackground style={{ backgroundColor: '#007aff' }} />
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
