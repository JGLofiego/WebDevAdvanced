# Atividade 6 - Fofoquinfo

Tipo um twitter mas com 1/10 das features.

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 16/08
- **Data de entrega:** 30/08

## Descrição da atividade

API routes são uma solução para criar uma API com Next.js, quaisquer arquivos localizados em /pages/api/\* são tratados como um endpoint e podem ser acessados como uma rota /api/\*. Middlewares são funções executadas antes de uma request ser finalizada, então baseado na request você pode modificar a resposta, redirecionar, adicionar headers, etc.

Você ira implementar a autenticação e criação de usuários de usuários na aplicação usando API routes e middlewares. Você deverá pesquisar sobre essa funcionalidades, e implementá-las para validar um JWT (JSON Web Token) de um usuário.

Além disso, você deverá implementar criação de fofocas e respostas.

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- Você deverá reproduzir o [mockup](https://www.figma.com/file/HxOR5CbGeDpb5x89J7L93Q/Fofoquinfo?node-id=0%3A1) da aplicação.
- O uso de API Routes e Middlewares é obrigatório.
- Os formulários de login e registro devem ser validados.
  - O nome deve conter pelo menos 3 caracteres.
  - A senha deve conter pelo menos 8 caracteres.
  - Validar confirmação de senha.
- Sua aplicação deverá usar API Routes para criar um _proxy_ da API gerada usando o `json-server`, isto é, a chamada deve ser feita para a API Route, e da API Route para o servidor `json-server`.
- Sua aplicação deverá usar API Routes para gerar o JWT do usuário fazendo login. Você pode usar o pacote [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para gerenciar JWTs.
- Sua aplicação deverá persistir a sessão do usuário logado.
- Sua aplicação deverá usar Middlewares para validar o JWT do usuário.
- Sua aplicação deverá usar Middlewares para redirecionar usuários com o JWT inválido ou inexistente para a página de login.
- O usuário poderá criar fofocas e responder fofocas.
- O usuário poderá visualizar as fofocas e respostas de outros usuários.
- O usuário poderá curtir as fofocas e respostas.
- Você deve usar o usuário do github e acessar foto de perfil dos usuários, por meio da URL `https://github.com/<username>.png`, e.g. https://github.com/KelvinSouza258.png
- Cada usuário deverá ter uma página de perfil que mostre suas fofocas.
- O usuário poderá editar seu perfil (nome, usuário do github e bio).
- O usuário poderá pesquisar por fofocas e usuários.

## Desafios

- Implementar refresh tokens para o usuário.
- Testar a aplicação utilizando vitest.

## Materiais de apoio

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Next.js Middlewares](https://nextjs.org/docs/advanced-features/middleware)
- [Next.js + vitest](https://nextjs.org/docs/testing)
- [Next.js + styled-components](https://styled-components.com/docs/advanced#with-swc)
- [SWR](https://swr.vercel.app/)
- [json-server](https://github.com/typicode/json-server)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
