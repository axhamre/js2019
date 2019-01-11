import React from 'react'
import { StyleSheet } from 'react-native'

import BaseText from './reusables/BaseText'

export default () => <BaseText style={styles.title}>Henric & Lo.</BaseText>

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
})
