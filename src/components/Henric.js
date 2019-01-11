import React from 'react'

import UnderscoreText from './reusables/UnderscoreText'
import SuperscriptLink from './reusables/SuperscriptLink'
import Content from './Content'

const jsLinks = [
  'https://github.com/Galooshi/import-js',
  'https://github.com/brigade/react-waypoin',
  'https://github.com/brigade/db-query-matchers',
]
const sfLinks = ['https://causes.com/', 'https://brigade.com/']
const ytLinks = [
  'https://www.youtube.com/watch?v=eCkW85rMKlk',
  'https://www.youtube.com/watch?v=Agjigh31EWM',
]
const blogLinks = ['https://medium.com/@trotzig']

export const renderLink = ({ url, index }) => (
  <SuperscriptLink key={index} href={url}>
    [{index}]
  </SuperscriptLink>
)

export default () => (
  <Content>
    <UnderscoreText>Henric.</UnderscoreText> Creator and contributor of popular
    open source libraries in Javascript, React, Ruby{' '}
    {jsLinks.map((url, index) => renderLink({ url, index: index + 1 }))}. Many
    years of experience working in the San Francisco tech scene{' '}
    {sfLinks.map((url, index) => renderLink({ url, index: index + 4 }))}.
    Intermittent public speaker{' '}
    {ytLinks.map((url, index) => renderLink({ url, index: index + 7 }))} and
    blog post writer{' '}
    {blogLinks.map((url, index) => renderLink({ url, index: index + 9 }))}. Ask
    him about UI testing.
  </Content>
)
