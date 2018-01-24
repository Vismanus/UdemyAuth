import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed.', loading: false })
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', loading: false })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
  }

  renderError() {
    if (this.state.error === '') {
      return
    }

    return (
      <CardSection>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        </View>
      </CardSection>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    paddingTop: 5,
    paddingBottom: 5
  }
}

export default LoginForm
