import React from 'react'

import StdLayout from '../../components/StdLayout'
import GlobalStyle from '../../styles/Global'

function User() {
  return (
    <>
      <GlobalStyle />
      <StdLayout
        pageInfo={{ isHome: false, isProfile: false, isSearch: false }}>
        <div>aaa</div>
      </StdLayout>
    </>
  )
}

export default User
