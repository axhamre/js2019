import React from 'react'
import { StyleSheet, View } from 'react-native'

import { isMobile } from './reusables/utils'

export default props => (
  <View
    style={[
      styles.wrapper,
      isMobile() ? styles.mobilePadding : styles.desktopPadding,
    ]}
  >
    <View {...props} style={styles.inner} />
  </View>
)

const styles = StyleSheet.create({
  desktopPadding: {
    paddingLeft: 120,
    paddingTop: 60,
  },
  mobilePadding: {
    padding: 30,
  },
  wrapper: {
    backgroundColor: '#F0F4F7',
    minHeight: '100vh',
  },
  inner: {
    maxWidth: 720,
  },
})
