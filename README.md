# Portfólio — Marcos Paulo

Portfólio de Marcos Paulo, designer gráfico, dedicado à apresentação de trabalhos de identidade visual, design gráfico, campanhas e experiências digitais. O site reúne uma seleção de projetos, informações sobre o profissional e canais de contato em uma interface responsiva.

**Endereço de publicação:** [mpdevtech.github.io/portfolio-mp](https://mpdevtech.github.io/portfolio-mp/)

## Funcionalidades

- Página inicial com apresentação, trabalhos em destaque, seção sobre e contato.
- Página individual para cada projeto, com descrição, galeria de imagens, aplicações e mockups.
- Navegação entre projetos anteriores e próximos, com suporte ao histórico do navegador.
- Layout adaptado para desktop e dispositivos móveis.
- Fontes hospedadas localmente e carregamento sob demanda das imagens de galeria.
- Publicação automatizada no GitHub Pages pelo GitHub Actions.

## Tecnologias

- **React 19** e **TypeScript** para a interface e organização do código.
- **Vite** para desenvolvimento local e build de produção.
- **CSS** para estilos, responsividade e identidade visual.
- **Oxlint** para análise estática do código.
- **GitHub Actions** e **GitHub Pages** para build e hospedagem.

## Executar localmente

Utilize **Node.js 24**, a mesma versão configurada no CI, e **npm**.

```sh
git clone https://github.com/mpdevtech/portfolio-mp.git
cd portfolio-mp
npm ci
npm run dev
```

Acesse o endereço exibido pelo Vite, normalmente `http://localhost:5173/portfolio-mp/`.

### Comandos disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run lint`: verifica o código com Oxlint.
- `npm run build`: verifica os tipos com TypeScript e gera o site em `dist/`.
- `npm run preview`: serve o build de produção localmente para conferência.

Para conferir a versão de produção:

```sh
npm run lint
npm run build
npm run preview
```

Abra o endereço informado pelo preview com o caminho `/portfolio-mp/`.

## Estrutura do projeto

```text
.github/workflows/deploy.yml  Workflow de build e publicação
public/fonts/                Fontes locais e suas licenças
public/images/               Fotografias, capas e imagens dos projetos
src/components/              Componentes da interface
src/data/                    Conteúdo dos projetos e links de contato
src/pages/                   Página inicial e página de projeto
src/App.tsx                  Navegação e composição da aplicação
src/App.css                  Estilos dos componentes e responsividade
src/index.css                Fontes, variáveis e estilos globais
src/paths.ts                 Resolução de caminhos para a base de publicação
vite.config.ts               Configuração do Vite e páginas de entrada
```

## Personalizar o conteúdo

### Projetos

Edite [`src/data/projects.ts`](src/data/projects.ts) para adicionar ou alterar os trabalhos. Cada projeto possui um `slug` único, título, categoria, ano, descrição, capa, imagem principal, galeria, aplicações e mockups.

Coloque os arquivos em `public/images/` e referencie-os nos dados do projeto. Preencha também os textos alternativos e as legendas das imagens.

Os projetos atuais incluem conteúdo demonstrativo e placeholders. Substitua-os pelos dados e imagens definitivos. Nos objetos que usam `...template`, declare os campos personalizados **depois dessa expansão**, para que sobrescrevam os valores compartilhados. Remova ou desative `placeholder` nas imagens finalizadas.

### Apresentação e contato

- Edite a apresentação nos componentes [`Hero.tsx`](src/components/Hero.tsx) e [`About.tsx`](src/components/About.tsx).
- Atualize WhatsApp, Instagram e e-mail em [`src/data/contact.ts`](src/data/contact.ts).
- Ajuste os estilos globais em [`src/index.css`](src/index.css) e os layouts em [`src/App.css`](src/App.css).
- Atualize o título e a descrição inicial do site em [`index.html`](index.html), além dos títulos de navegação em [`src/App.tsx`](src/App.tsx).

## Deploy no GitHub Pages

O [workflow de publicação](.github/workflows/deploy.yml) é executado a cada push na branch `main`, incluindo merges. Ele instala as dependências com `npm ci`, executa lint e build e publica o conteúdo de `dist/`. O deploy depende do sucesso dessas verificações.

Para habilitar a publicação no repositório:

1. Acesse **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para `main` e acompanhe a execução na aba **Actions**.

Também é possível iniciar uma publicação manualmente em **Actions → Deploy to GitHub Pages → Run workflow**. Não é necessário criar uma branch `gh-pages` ou configurar um token pessoal.

A base de publicação está definida como `/portfolio-mp/` em [`vite.config.ts`](vite.config.ts). Se o endereço do site mudar, ajuste essa configuração. O build gera páginas de entrada para todos os projetos cadastrados e uma página `404.html`, permitindo acessar e recarregar os links dos cases diretamente no GitHub Pages.

## Autoria e contato

**Marcos Paulo — Designer Gráfico**

- [Instagram — mpdesign.studio](https://www.instagram.com/mpdesign.studio/)
- [E-mail — mpdesign.marcos@gmail.com](mailto:mpdesign.marcos@gmail.com)

## Licença

Este repositório ainda não define uma licença de uso para o código e o conteúdo visual. As fontes distribuídas em `public/fonts/` possuem suas próprias licenças, incluídas nessa pasta.
