import React from 'react'
import { StyleSheet } from 'react-native'

import BaseText from './BaseText'

export default props => (
  <BaseText
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style,
    )}
  />
)

const styles = StyleSheet.create({
  link: {
    cursor: 'pointer',
    color: '#29B1F0',
  },
})
