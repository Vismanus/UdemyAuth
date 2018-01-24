import React from 'react'
import { View, Platform } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  statusBarBackground: {
    height: Platform.OS === 'ios' ? 20 : 0
  }
}

const StatusBarBackground = ({ style }) => (
  <View style={[styles.statusBarBackground, style]} />
)

StatusBarBackground.propTypes = {
  style: PropTypes.object
}

StatusBarBackground.defaultProps = {
  style: { backgroundColor: 'transparent' }
}

export { StatusBarBackground }
