import React from 'react'

import cheese from '../../assets/cheese.png'
import mayo from '../../assets/mayo.png'
import menuBtn from '../../assets/menuBtn.svg'
import pepperoni from '../../assets/pepperoni.png'
import thingsPizza from '../../assets/thingsPizza.png'
import * as S from './styles'

interface Item {
  img: string
  index: number
  text: string
}

const data: Item[] = [
  {
    img: pepperoni,
    index: 0,
    text: 'Pepperoni'
  },
  {
    img: mayo,
    index: 1,
    text: 'Muita maionese'
  },
  {
    img: cheese,
    index: 2,
    text: 'Queijo'
  },
  {
    img: thingsPizza,
    index: 3,
    text: 'Vários ingredientes'
  }
]

function Menu() {
  return (
    <S.Bg>
      <S.Menu>
        <S.TitleDiv>
          <S.HR />
          <S.Title>Nosso cardápio</S.Title>
        </S.TitleDiv>
        <S.MenuContent>
          <S.BackBtn>
            <img alt="botão de voltar menu" src={menuBtn} />
          </S.BackBtn>
          <S.MenuItems>
            {data.map(pizza => (
              <S.MenuItem>
                <img alt={`Pizza de ${pizza.text}`} src={pizza.img} />
                <S.PizzaName>{pizza.text}</S.PizzaName>
                <S.Desc>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </S.Desc>
                <S.Price>R$ 39,90</S.Price>
                <S.OrderNowBtn>Pedir agora</S.OrderNowBtn>
              </S.MenuItem>
            ))}
          </S.MenuItems>
          <S.NextBtn>
            <img alt="botão de avançar menu" src={menuBtn} />
          </S.NextBtn>
        </S.MenuContent>
      </S.Menu>
    </S.Bg>
  )
}

export default Menu
