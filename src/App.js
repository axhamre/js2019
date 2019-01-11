import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import TopSection from './TopSection'
import Introduction from './Introduction'
import Common from './Common'
import Henric from './Henric'
import Lo from './Lo'
import BottomSection from './BottomSection'

class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <TopSection />
          <Introduction />
          <Common />
          <Henric />
          <Lo />
          <BottomSection />
        </View>
      </View>
    )
  }
}

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

export default App
