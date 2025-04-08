import Head from 'next/head'
import React from 'react'

import LeftSideIndex from '../components/LeftSideIndex'
import RegisterForm from '../components/RegisterForm'
import GlobalStyle, { DivHorizontal } from '../styles/Global'

function Register() {
  return (
    <>
      <Head>
        <title>Criar conta</title>
      </Head>
      <DivHorizontal>
        <GlobalStyle />
        <LeftSideIndex />
        <RegisterForm />
      </DivHorizontal>
    </>
  )
}

export default Register
