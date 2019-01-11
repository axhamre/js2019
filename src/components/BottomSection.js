import React from 'react'
import { StyleSheet } from 'react-native'
import preval from 'preval.macro'

import BaseText from './reusables/BaseText'
import BaseLink from './reusables/BaseLink'

export default () => {
  const time = preval`module.exports = require('date-fns').format(new Date(), 'D MMMM YYYY')`
  return (
    <BaseText style={styles.title}>
      Published {time}.{' '}
      <BaseLink target="_blank" href="https://github.com/hundsim/js2019">
        Source.
      </BaseLink>
    </BaseText>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    marginBottom: 50,
  },
})
