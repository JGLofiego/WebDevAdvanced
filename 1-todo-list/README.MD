# Atividade 1 - Todo List

Hoje vamos aprender uma forma alternativa de compartilhar dados no React, que é a _Context API_, como também, _useReducer_ para gerenciar os estados.

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 12/07
- **Data de entrega:** 19/07

## Descrição da atividade

A Context API é uma API que permite compartilhar estado de uma forma mais global, entre todos os componentes da mesma árvore de componentes. Isto é:

```jsx
const App = () => {
  return (
    <DataContext>
      <Navbar />
      <Body />
    </DataContext>
  )
}

const Navbar = () => {
  return (
    <header>
      <nav>
        <UserInfo />
      </nav>
    </header>
  )
}
```

Os dados passados ao `DataContext` são passados para todos os componentes filhos, e todos os componentes netos também, de forma que o componente `UserInfo` pode acessar os dados do `DataContext` diretamente, sem receber nenhuma _prop_.

O _useReducer_ é um hook de gerenciamento de estado. Ele é utilizado para lidar com estados mais complexos, que seriam mais difíceis de trabalhar com o _useState_.

A atividade de hoje será uma pequena aplicação que armazena uma lista de tarefas, onde você deverá aplicar os conceitos da `Context API` e do `useReducer` para gerenciar o estado.

Seu trabalho será pesquisar sobre esses hooks e implementá-los no seu projeto seguindo o [mockup da aplicação](https://www.figma.com/file/fBQjkAtJOKuNXej61klLMl/Todo-list?node-id=0%3A1).

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- Você deverá reproduzir o [mockup](https://www.figma.com/file/fBQjkAtJOKuNXej61klLMl/Todo-list?node-id=0%3A1) da aplicação.
- Você deverá utilizar a API de Context API para compartilhar dados entre os componentes, tal como o hook useContext.
- Você deverá utilizar o useReducer para manipular o estado compartilhado.

## Desafios

- [ ] A Context API armazena seus dados em memória, então esses dados não são persistidos caso o usuário reinicie a página ou feche o navegador. Você pode implementar essa persistência utilizando [json-server](https://github.com/typicode/json-server) e utilizar um arquivo .json como um banco de dados, como também, todos os endpoints para consultá-lo.
  - [ ] Caso utilize o json-server, você pode utilizar de [Optimistic UI Changes](https://medium.com/distant-horizons/using-optimistic-ui-to-delight-your-users-ac819a81d59a) para garantir uma melhor experiência para o usuário.

## Materiais de apoio

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Context API](https://reactjs.org/docs/context.html)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [How to use React Context like a pro](https://devtrium.com/posts/how-use-react-context-pro)
