import React from 'react'
import { StyleSheet } from 'react-native'
import preval from 'preval.macro'

import BaseText from './reusables/BaseText'
import BaseLink from './reusables/BaseLink'

export default () => (
  <BaseText style={styles.title}>
    Site last updated on {preval`module.exports = new Date().toLocaleString();`}
    .{' '}
    <BaseLink target="_blank" href="https://github.com/hundsim/js2019">
      Source.
    </BaseLink>
  </BaseText>
)

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    marginBottom: 50,
  },
})
