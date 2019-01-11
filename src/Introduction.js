import React from 'react'
import { StyleSheet, View } from 'react-native'

import BaseText from './reusables/BaseText'

export default () => (
  <View style={styles.wrapper}>
    <BaseText style={styles.emoji}>
      <span role="img" aria-label="emoji">
        👋
      </span>
    </BaseText>
    <BaseText style={styles.text}>
      Hey there from two Javascript developers based out of Stockholm.
    </BaseText>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 200,
  },
  emoji: {
    fontSize: 35,
  },
  text: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: '600',
    lineHeight: 62,
  },
})
