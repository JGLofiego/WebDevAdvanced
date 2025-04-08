import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import BlogImg from '../../public/images/BlogImg.png'
import * as S from './styles'

function Layout({ children }: { children: ReactNode }) {
  return (
    <S.Div>
      <S.Header>
        <S.Section>
          <Link href="/">
            <S.Logo>
              <Image alt="Um B" src={BlogImg} />
              <h1>log Info</h1>
            </S.Logo>
          </Link>
        </S.Section>
      </S.Header>
      {children}
      <S.Footer />
    </S.Div>
  )
}

export default Layout
