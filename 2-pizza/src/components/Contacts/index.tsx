import React from 'react'

import clock from '../../assets/clock.svg'
import pinIcon from '../../assets/pinIcon.svg'
import wpp from '../../assets/wpp.svg'
import { Section } from '../../styles/Global'
import * as S from './styles'

function Contact() {
  return (
    <S.Bg>
      <Section>
        <S.Content>
          <S.TimeLocal>
            <S.Time>
              <img alt="Ícone de relógio" src={clock} />
              <S.Schedule>
                <S.Hours>SEG - QUI 10:00 - 23:00</S.Hours>
                <S.Hours>SEX - DOM 18:00 - 23:00</S.Hours>
              </S.Schedule>
            </S.Time>
            <S.InfoContainer>
              <S.Info>
                <img alt="Ícone de localização" src={pinIcon} />
                <S.InfoTxt>Rua Flores Cordovil, 106</S.InfoTxt>
              </S.Info>
              <S.Info>
                <img alt="Ícone de whatsapp" src={wpp} />
                <S.InfoTxt>(95) 99460-9947</S.InfoTxt>
              </S.Info>
            </S.InfoContainer>
          </S.TimeLocal>
          <S.Form>
            <S.TitleContainer>
              <S.HR />
              <S.Title>Fale conosco</S.Title>
            </S.TitleContainer>
            <S.TextIn required placeholder="Nome" type="text" />
            <S.TextIn required placeholder="Email" type="email" />
            <S.TextArea required placeholder="Mensagem..." />
            <S.FormBtn>Enviar</S.FormBtn>
          </S.Form>
        </S.Content>
      </Section>
    </S.Bg>
  )
}

export default Contact
