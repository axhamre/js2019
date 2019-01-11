import React from 'react'
import { StyleSheet } from 'react-native'

import BaseText from './BaseText'

export default props => (
  <BaseText
    {...props}
    target="_blank"
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
    fontSize: 16,
    position: 'relative',
    top: '-0.5em',
  },
})
