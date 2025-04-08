# Atividade 2 - PIZZAPIZZA

CSS-in-JS, melhor que CSS "puro", mas não chega no Tailwind.

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 19/07
- **Data de entrega:** 26/07

## Descrição da atividade

Existem muitas formas de estilizar, muitas mesmo.

- CSS "puro"
- CSS Modules
- Inline CSS (Passível de desligamento 🔪)
- Preprocessadores (Sass, Less, Stylus)
- Frameworks (Bootstrap, Materialize, Tailwind, etc.)
- CSS-in-JS (Styled Components, Stitches, Emotion, etc.)

E a lista segue...

Uma dessas abordagens é o CSS-in-JS, que é simplesmente a declaração do nosso CSS num arquivo Javascript, dando a ele, efetivamente, superpoderes: sem conflitos de classes, facilidade de manutenção, facilidade de reutilização, variáveis JS no CSS, etc. Uma lib bem popular de CSS-in-JS é o [styled-components](https://styled-components.com/), e é com ela que vamos trabalhar nessa atividade.

Sua atividade será pesquisar sobre o CSS-in-JS, especificamente o styled-components, e entender como ele funciona, vantagens, desvantagens, casos de uso e utilizá-lo para estilizar seu projeto seguindo o [mockup da aplicação](https://www.figma.com/file/b4s661p8iQId3nIIp2bgxX/PizzaPizza?node-id=0%3A1).

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- Você deverá reproduzir o [mockup](https://www.figma.com/file/b4s661p8iQId3nIIp2bgxX/PizzaPizza?node-id=0%3A1) da aplicação.
- Você deverá utilizar o [styled-components](https://styled-components.com/) para estilizar sua aplicação.
- Todas as cores da aplicação devem ser definidas no `theme` do [styled-components](https://styled-components.com/).

## Desafios

- [ ] O componente do cardápio deve ser um carrosel com loop infinito

## Materiais de apoio

- [styled-components](https://styled-components.com/)

## Sugestão de [Abner Rodrigues 🐶](@Todomir)

Como o styled-components se trata de, bom, componentes pré-estilizados, os imports podem acabar ficando meio grandes. Como uma sugestão, recomendo utilizar [esse padrão](https://medium.com/inturn-eng/naming-styled-components-d7097950a245) para importar e nomear seus componentes. Todos os argumentos à favor dele estão no artigo, recomendo ler e decidir se usar ou não.
