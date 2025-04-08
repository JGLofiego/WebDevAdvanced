import { deleteCookie } from 'cookies-next'
import Head from 'next/head'

import LeftSideIndex from '../components/LeftSideIndex'
import LoginForm from '../components/LoginForm'
import GlobalStyle, { DivHorizontal } from '../styles/Global'

function Index() {
  deleteCookie('token')

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <DivHorizontal>
        <GlobalStyle />
        <LeftSideIndex />
        <LoginForm />
      </DivHorizontal>
    </>
  )
}

export default Index
