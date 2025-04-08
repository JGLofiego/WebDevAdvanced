# Atividade 5 - Blog Info

Next.js framework react para produção

## Informações principais

- **Núcleo:** Front-end
- **Orientador**: [Kelvin](@KelvinSouza258)
- **Data da atividade:** 09/08
- **Data de entrega:** 16/08

## Descrição da atividade

Até agora só utilizamos o React. Porém para muitos sites o CSR (client-side rendering) atrapalha o SEO (search engine optimization), já que a página fica vazia até o javascript carregar.

Esse é um dos problemas que o Next.js resolve com algumas alternativas ao CSR.

- SSR (server-side rendering)
  - Ao receber uma `request` o Next.js renderiza a página no servidor e retorna o HTML para o cliente.
- SSG (static-site generation)
  - O Next.js renderiza a página em tempo de `build` e gera um arquivo HTML estático para á página.
- ISR (incremental static regeneration)
  - Permite criar ou atualizar páginas estáticas depois do `build`

Além disso, o Next oferece file based routing, isto é, todas suas páginas já são automaticamente transformadas em rotas e não precisamos fazer isso manualmente, eliminando o uso de bibliotecas de roteamento, como também diversos componentes que facilitam a criação de páginas, como Image, Link, Script, entre outros. O Next possui também suporte à CSS Modules out-of-the-box.

Sua atividade será aprender sobre SSR e SSG (server side rendering e static site generation), e como usar Next.js para gerar sites estáticos. Para isso, você irá replicar este [mockup](https://www.figma.com/file/222MKiKbqIBTsgC5VcCpvQ/BlogInfo?node-id=0%3A1). A página home será a página inicial, e a post será a página de um post específico. As páginas de posts devem ser geradas automaticamente, com uma página pra cada post disponível.

### Regras

- O uso do Typescript é obrigatório e seu uso eficiente será avaliado.
- Sua aplicação deve seguir o [mockup](https://www.figma.com/file/222MKiKbqIBTsgC5VcCpvQ/BlogInfo?node-id=0%3A1).
- Você deve utilizar o [styled-components](https://styled-components.com/) para estilizar sua aplicação.
- Você deverá criar os posts no arquivo db.json e utilizar o [json-server](https://github.com/typicode/json-server) para simular uma API com um banco de dados.
- Na página inicial, o post mais recente deve ficar em destaque, sendo exibido acima dos outros.
- As páginas de posts devem ser geradas automaticamente, com uma página pra cada post disponível.

## Desafios

- Implementar comentários em posts.
- Testar sua aplicação utilizando vitest.

## Materiais de apoio

- [Next.js](https://nextjs.org/)
- [Next.js + vitest](https://nextjs.org/docs/testing)
- [Next.js + styled-components](https://styled-components.com/docs/advanced#with-swc)
- [json-server](https://github.com/typicode/json-server)
