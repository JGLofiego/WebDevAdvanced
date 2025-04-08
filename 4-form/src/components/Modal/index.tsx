import React, { useContext } from 'react'
import ReactModal from 'react-modal'

import closeBtn from '../../assets/closeBtn.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import EmailContext from '../../contexts/EmailContext'
import * as S from './styles'

ReactModal.setAppElement('#root')

function Modal({
  setState,
  state
}: {
  setState: (newState: boolean) => void
  state: boolean
}) {
  const { email } = useContext(EmailContext)
  return (
    <ReactModal
      className="modal"
      isOpen={state}
      overlayClassName="overlay"
      onRequestClose={() => setState(false)}>
      <S.CloseBtn onClick={() => setState(false)}>
        <img alt="Botão de fechar modal" src={closeBtn} />
      </S.CloseBtn>
      <S.Div>
        <S.TitleContainer>
          <S.ThanksTxt>Obrigado por usar nossa plataforma</S.ThanksTxt>
          <S.ConfirmationTxt>{`Um email de confimação foi enviado para ${email}, siga as instruções para validar sua conta e ter acesso a plataforma.`}</S.ConfirmationTxt>
        </S.TitleContainer>
        <S.ContactContainer>
          <p>Tem alguma dúvida? Fale conosco contato@contato.com</p>
          <S.DivSocial>
            <a href="https://twitter.com/" target="__blank">
              <img alt="Twitter" src={twitter} />
            </a>
            <a href="https://www.instagram.com/" target="__blank">
              <img alt="Instagram" src={instagram} />
            </a>
          </S.DivSocial>
        </S.ContactContainer>
      </S.Div>
    </ReactModal>
  )
}

export default Modal
