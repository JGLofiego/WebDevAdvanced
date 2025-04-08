# Atividade 4 - Formulários

Testes e validação de formulários

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 02/08
- **Data de entrega:** 09/08

## Descrição da atividade

Testes automatizados se fundamentam no uso de ferramentas para controlar a execução de testes de software. Através da aplicação de estratégias, o objetivo é basicamente escrever um software que testará seu programa por você.

Nessa atividade vocês devem criar um formulário, seguindo o [mockup](https://www.figma.com/file/3qqAklWiDq8RfB8E8EzeWA/Form?node-id=10%3A13), que receba os dados de um usuário e validá-los.

Além disso, vocês devem criar testes automatizados, utilizando [Vitest](https://vitest.dev/) e [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/), para testar a validação do formulário.

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- Sua aplicação deve seguir o [mockup](https://www.figma.com/file/3qqAklWiDq8RfB8E8EzeWA/Form?node-id=10%3A13)
- Todos os inputs devem ser obrigatórios.
- O usuário deve aceitar os termos de uso para enviar o formulário.
- O modal deve mostrar o email do usuário.
- Validação dos inputs:
  - Nome e sobrenome devem conter pelo menos 3 caracteres.
  - O email e CPF devem ser válidos.
  - A senha deve ser maior que 8 caracteres.
  - A confirmação de senha deve ser igual a senha.
- O validação do formulário deve ser testada utilizando o [Vitest](https://vitest.dev/) e [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/).

## Materiais de apoio

- [Vitest](https://vitest.dev/)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [User-Event](https://testing-library.com/docs/user-event/intro)
- [Jest-Dom](https://testing-library.com/docs/ecosystem-jest-dom/)
- Post sobre validação de formulário com [React-Hook-Form + Zod](https://www.austinshelby.com/blog/build-a-react-form-with-react-hook-form-and-zod)
