import React from 'react'
import { View, StyleSheet } from 'react-native'

import BaseText from './BaseText'

export default ({ children }) => (
  <View style={[styles.underscore]}>
    <BaseText>{children}</BaseText>
  </View>
)

const styles = StyleSheet.create({
  underscore: {
    borderBottomColor: '#21263B',
    borderBottomWidth: 2,
  },
})
