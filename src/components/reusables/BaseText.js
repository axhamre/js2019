import React from 'react'
import { Text, StyleSheet } from 'react-native'
import 'circular-std'

export default ({ style, ...rest }) => (
  <Text
    style={StyleSheet.compose(
      styles.text,
      style,
    )}
    {...rest}
  />
)

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Circularstd, sans-serif',
    fontSize: 22,
    fontWeight: '300',
    lineHeight: 'normal',
    color: '#21263B',
  },
})
