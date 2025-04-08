import React from 'react'

import HomeTweets from '../components/HomeTweets'
import StdLayout from '../components/StdLayout'
import GlobalStyle from '../styles/Global'

function Home() {
  return (
    <>
      <GlobalStyle />
      <StdLayout pageInfo={{ isHome: true, isProfile: false, isSearch: false }}>
        <HomeTweets />
      </StdLayout>
    </>
  )
}

export default Home
