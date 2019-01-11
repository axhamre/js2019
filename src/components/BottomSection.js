import React from 'react'
import { StyleSheet, View } from 'react-native'
import preval from 'preval.macro'

import BaseText from './reusables/BaseText'
import BaseLink from './reusables/BaseLink'

export default () => {
  const time = preval`module.exports = require('date-fns').format(new Date(), 'D MMMM YYYY')`
  return (
    <View style={styles.title}>
      <BaseText style={{ marginBottom: 5 }}>Published {time}.</BaseText>
      <BaseText>
        <BaseLink href="mailto:henric.trotzig@gmail.com">Email.</BaseLink>{' '}
        <BaseLink target="_blank" href="https://github.com/hundsim/js2019">
          Source.
        </BaseLink>{' '}
      </BaseText>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    marginBottom: 50,
  },
})
