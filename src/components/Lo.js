import React from 'react'

import UnderscoreText from './reusables/UnderscoreText'
import Content from './Content'
import { renderLink } from './Henric'

const siteLinks = [
  'https://skillbreak.com/',
  'https://calbird.com/',
  'https://www.habitud.se/pages/habitudpro',
  'https://grundskolan.pfl.nu',
]

export default () => (
  <Content>
    <UnderscoreText>Lo.</UnderscoreText> React-GraphQL wizard who can turn ideas
    into a working product in no time{' '}
    {siteLinks.map((url, index) => renderLink({ url, index: index + 1 }))}.
    Full-stack with a good eye for the latest and greatest in Javascript (heard
    of react-native-web? Lo has.). Ask him about JAMstack.
  </Content>
)
