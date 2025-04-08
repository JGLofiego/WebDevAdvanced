import React from 'react'

import chefIcon from '../../assets/chefIcon.svg'
import deliveryIcon from '../../assets/deliveryIcon.svg'
import ingredientsIcon from '../../assets/ingredientsIcon.svg'
import { Section } from '../../styles/Global'
import * as S from './styles'

function Perks() {
  return (
    <S.Bg>
      <Section>
        <S.Perks>
          <S.Perk>
            <img alt="Ícone de chefe de cozinha" src={chefIcon} />
            <S.PerkTitle>Criada pro chefs</S.PerkTitle>
            <S.PerkTxt>
              O menu foi elaborado pelos Chefs reconhecidos: Chef 01 e Chef 02.
            </S.PerkTxt>
          </S.Perk>
          <S.Perk>
            <img alt="Ícone de ingredientes" src={ingredientsIcon} />
            <S.PerkTitle>Qualidade dos ingredientes</S.PerkTitle>
            <S.PerkTxt>
              Utilizamos os melhores ingredientes com qualidade e marca já
              reconhecida no mercado.
            </S.PerkTxt>
          </S.Perk>
          <S.Perk>
            <img alt="Ícone de motocicleta" src={deliveryIcon} />
            <S.PerkTitle>Velocidade na entrega</S.PerkTitle>
            <S.PerkTxt>
              O processo de fabricação da pizza é extremamente rápido,
              possibilitando uma entrega com agilidade.
            </S.PerkTxt>
          </S.Perk>
        </S.Perks>
      </Section>
    </S.Bg>
  )
}

export default Perks
