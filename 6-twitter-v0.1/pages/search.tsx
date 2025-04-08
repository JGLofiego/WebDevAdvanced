import React from 'react'

import StdLayout from '../components/StdLayout'
import GlobalStyle from '../styles/Global'

function Search() {
  return (
    <>
      <GlobalStyle />
      <StdLayout pageInfo={{ isHome: false, isSearch: true, isProfile: false }}>
        <div>pesquisa</div>
      </StdLayout>
    </>
  )
}

export default Search
