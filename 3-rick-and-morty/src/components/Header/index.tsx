import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import portal from '../../assets/portal.png'
import searchIcon from '../../assets/search.svg'
import * as S from './styles'

function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [params] = searchParams.getAll('name')

  return (
    <S.Header>
      <S.LogoBtn onClick={() => navigate('/')}>
        <img alt="Imagem do portal do Rick" src={portal} />
        <S.LogoTxt>Rickpedia</S.LogoTxt>
      </S.LogoBtn>
      <S.SearchForm action="/search">
        <S.SearchBar
          defaultValue={params}
          name="name"
          placeholder="Search"
          type="text"
        />
        <S.SearchBtn>
          <img alt="Lupa de pesquisa" src={searchIcon} />
        </S.SearchBtn>
      </S.SearchForm>
    </S.Header>
  )
}

export default Header
