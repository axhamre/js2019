import React from 'react'

import TopSection from './components/TopSection'
import Introduction from './components/Introduction'
import Common from './components/Common'
import Henric from './components/Henric'
import Lo from './components/Lo'
import BottomSection from './components/BottomSection'
import PageContainer from './components/PageContainer'

const App = () => (
  <PageContainer>
    <TopSection />
    <Introduction />
    <Common />
    <Henric />
    <Lo />
    <BottomSection />
  </PageContainer>
)

export default App
