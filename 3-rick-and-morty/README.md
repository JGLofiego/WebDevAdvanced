# Atividade 3 - Rick and Morty

Loading, erros, Rick, Morty, Beth, Summer, Jerry...

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 26/07
- **Data de entrega:** 02/08

## Descrição da atividade

Nessa atividade você fará a Rickpedia, para isso será utilizado o [Rick and Morty API](https://rickandmortyapi.com/).

Sua atividade será constituida em 2 páginas:

- '/' que será a página inicial da aplicação com uma barra de pesquisa e informações sobre alguns personagens.
- '/results' que será a página que mostrará os resultados da pesquisa.

É importante lidar com todos os estados da aplicação, loadings, erros, success, etc.

Para lidar com loadings você deverá utilizar `React.Suspense`, uma feature do React que permite que você mostre um indicador de loading(fallback) e renderize um componente apenas quando ele "estiver pronto para ser renderizado". O `Suspense` é uma feature experimental do React e você deverá utilzar o
`React-Query` em Suspense Mode para utilizá-la [React-Query + Suspense](https://tanstack.com/query/v4/docs/guides/suspense)

Para lidar com os erros você deverá utilizar Error Boundaries, uma error boundary é um componente (de classe) que intercepta os erros em qualquer lugar da árvores de filhos e exibe uma UI alternativa.

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- A pesquisa deve ser realizada pelo nome do personagem.
- A página results deverá utilizar URLSearchParams para receber os parâmetros da pesquisa e.g. /results?q=aqua.
- Você deverá reproduzir o [mockup](https://www.figma.com/file/w6f9uPzSRcW0Pq5lLuX9iD/Rickpedia) da aplicação.
- Você deverá utilizar o [styled-components](https://styled-components.com/) para estilizar sua aplicação.
- Você deverá utilizar o [react-query](https://tanstack.com/query/v4/) para fazer requisições à API.
- Você deverá utilizar o [suspense](https://reactjs.org/docs/react-api.html#reactsuspense) para mostrar um skeleton loading em sua aplicação.
- Você deverá utilizar [error boundaries](https://reactjs.org/docs/error-boundaries.html) para tratar erros na aplicação.

## Desafios

- [ ] Home com um scroll infinito

## Materiais de apoio

- [Rick and Morty API](https://rickandmortyapi.com/)
- [React-Query](https://tanstack.com/query/v4/)
- [Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)
- [Suspense RFC](https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md)
- [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
