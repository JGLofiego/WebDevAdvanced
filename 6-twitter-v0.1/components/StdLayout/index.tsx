import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

import { DataUsers } from '../../pages/api/users'
import * as S from './styles'

function StdLayout({
  children,
  pageInfo
}: {
  children: JSX.Element
  pageInfo: { isHome: boolean; isProfile: boolean; isSearch: boolean }
}) {
  const { data } = useSWR('http://localhost:3000/api/newUsers', (...args) =>
    fetch(...args).then(res => res.json() as Promise<DataUsers[]>)
  )

  return (
    <S.ComponentDiv>
      <S.Header>
        <S.HeaderInner>
          <picture>
            <S.Logo alt="Logo do Fofoquinfo" src="/assets/fofoquinfo.svg" />
          </picture>
        </S.HeaderInner>
      </S.Header>
      <S.MenusAndContent>
        <S.MenuLeft>
          <S.TopSideNav>
            <Link href="/home">
              <S.DivInLink>
                <picture>
                  <img
                    alt="Botão para ir na home"
                    src={
                      pageInfo.isHome
                        ? '/assets/homeActive.svg'
                        : '/assets/home.svg'
                    }
                  />
                </picture>
                <S.LinkTxt className={pageInfo.isHome ? 'bold' : ''}>
                  Home
                </S.LinkTxt>
              </S.DivInLink>
            </Link>
            <Link href="/search">
              <S.DivInLink>
                <picture>
                  <img alt="Botão para ir pesquisar" src="/assets/search.svg" />
                </picture>
                <S.LinkTxt className={pageInfo.isSearch ? 'bold' : ''}>
                  Pesquisa
                </S.LinkTxt>
              </S.DivInLink>
            </Link>
            <Link href="/profile">
              <S.DivInLink>
                <picture>
                  <img
                    alt="Botão para ir no perfil"
                    src={
                      pageInfo.isProfile
                        ? '/assets/profileActive.svg'
                        : '/assets/profile.svg'
                    }
                  />
                </picture>
                <S.LinkTxt className={pageInfo.isProfile ? 'bold' : ''}>
                  Perfil
                </S.LinkTxt>
              </S.DivInLink>
            </Link>
          </S.TopSideNav>
          <Link href="/">
            <S.DivInLink>
              <picture>
                <img alt="Botão de sair" src="/assets/logout.svg" />
              </picture>
              <S.LogoutTxt>Sair</S.LogoutTxt>
            </S.DivInLink>
          </Link>
        </S.MenuLeft>
        {children}
        <S.MenuRight>
          {pageInfo.isHome ? (
            <S.SearchForm action="/search">
              <S.SearchInput
                name="query"
                placeholder="Pesquisar..."
                type="text"
              />
              <S.SearchBtn>
                <S.SearchBtnImg
                  alt="Botão de pesquisa"
                  src="/assets/search.svg"
                />
              </S.SearchBtn>
            </S.SearchForm>
          ) : (
            ''
          )}
          <S.NewUsersDiv>
            <S.NewUsersTxt>Novos usuários</S.NewUsersTxt>
            {data?.map(user => (
              <S.Profile>
                <S.ProfileIcon
                  alt={`Ícone do ${user.name}`}
                  src={`https://github.com/${user.github}.png`}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/assets/unknown.png'
                  }}
                />
                <S.Informations>
                  <Link href={`/users/${user.name}`}>
                    <S.NameAndGithub>
                      <S.Name>{user.name}</S.Name>
                      <S.Github>{`@${user.github}`}</S.Github>
                    </S.NameAndGithub>
                  </Link>
                  <S.Bio>{user.bio}</S.Bio>
                </S.Informations>
              </S.Profile>
            ))}
          </S.NewUsersDiv>
        </S.MenuRight>
      </S.MenusAndContent>
    </S.ComponentDiv>
  )
}

export default StdLayout
