import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props => (
  <View style={styles.wrapper}>
    <View {...props} style={styles.inner} />
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 120,
    paddingTop: 60,
    backgroundColor: '#F0F4F7',
    minHeight: '100vh',
  },
  inner: {
    maxWidth: 720,
  },
})
