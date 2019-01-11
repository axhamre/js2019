import React from 'react'
import { StyleSheet } from 'react-native'

import BaseText from './reusables/BaseText'
import BaseLink from './reusables/BaseLink'

export default () => (
  <BaseText style={styles.title}>
    This page was created in January 2019.{' '}
    <BaseLink href="https://github.com/hundsim/something">Source.</BaseLink>
  </BaseText>
)

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    marginBottom: 50,
  },
})
