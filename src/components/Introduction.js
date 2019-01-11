import React from 'react'
import { StyleSheet, View } from 'react-native'

import BaseText from './reusables/BaseText'
import { isMobile } from './reusables/utils'

export default () => (
  <View style={{ marginTop: isMobile() ? 100 : 200 }}>
    <BaseText style={styles.emoji}>
      <span role="img" aria-label="emoji">
        👋
      </span>
    </BaseText>
    <BaseText
      style={[styles.text, isMobile() ? styles.mobileText : styles.desktopText]}
    >
      Hello there from two Javascript developers based in Stockholm.
    </BaseText>
  </View>
)

const styles = StyleSheet.create({
  emoji: {
    fontSize: 35,
  },
  text: {
    marginTop: 20,
    fontWeight: '600',
  },
  desktopText: {
    fontSize: 60,
    lineHeight: 62,
  },
  mobileText: {
    fontSize: 40,
    lineHeight: 42,
  },
})
