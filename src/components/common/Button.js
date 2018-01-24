import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: PropTypes.any,
  children: PropTypes.any
}

Button.defaultProps = {
  onPress: PropTypes.any,
  children: PropTypes.any
}

export { Button }
