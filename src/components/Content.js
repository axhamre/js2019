import React from 'react'
import { StyleSheet } from 'react-native'

import BaseText from './reusables/BaseText'

export default props => <BaseText {...props} style={styles.text} />

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    lineHeight: 34,
  },
})
