# Portfólio — Marcos Paulo

Site pessoal de **Marcos Paulo, designer gráfico**, criado para apresentar trabalhos de identidade visual, design editorial, campanhas e comunicação digital. O portfólio reúne a apresentação profissional, uma seleção de projetos e canais de contato para novas oportunidades.

[Ver portfólio](https://mpdevtech.github.io/portfolio-mp/) · [Entrar em contato](mailto:mpdesign.marcos@gmail.com)

## Sobre o projeto

A experiência é organizada em uma página inicial com apresentação, trabalhos, sobre e contato, além de páginas individuais para explorar cada case. Os projetos contam com descrição, imagens, aplicações e mockups, com navegação entre trabalhos anteriores e próximos.

A interface é responsiva e utiliza fontes locais, imagens de galeria carregadas sob demanda e navegação com suporte ao histórico do navegador. O conteúdo dos projetos fica separado dos componentes para facilitar a atualização do portfólio.

**Estado do conteúdo:** Pedro Lucas (2024) já possui conteúdo real. Os demais cases ainda incluem textos e imagens demonstrativos.

## Tecnologias

- **React 19 + TypeScript:** componentes e lógica da interface.
- **Vite:** servidor de desenvolvimento e build de produção.
- **CSS:** identidade visual, layouts e responsividade.
- **Oxlint:** análise estática do código.
- **GitHub Actions + GitHub Pages:** integração e publicação automatizadas.

## Como executar

### Pré-requisitos

- Node.js 24, versão utilizada no workflow do projeto.
- npm e Git instalados.

### Instalação

```sh
git clone https://github.com/mpdevtech/portfolio-mp.git
cd portfolio-mp
npm ci
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173/portfolio-mp/`.

### Scripts

- `npm run dev` — inicia o ambiente de desenvolvimento.
- `npm run lint` — verifica o código com Oxlint.
- `npm run build` — verifica os tipos e gera os arquivos de produção em `dist/`.
- `npm run preview` — permite conferir localmente o build já gerado.

Antes de publicar, confira a versão de produção:

```sh
npm run lint
npm run build
npm run preview
```

No preview, acesse `/portfolio-mp/` no endereço exibido pelo terminal.

## Organização

```text
.github/workflows/deploy.yml  Build e deploy para o GitHub Pages
public/fonts/                Fontes locais e licenças
public/images/               Fotografias e imagens demonstrativas
src/assets/projects/         Imagens reais organizadas por projeto
src/components/              Componentes reutilizáveis e seções da página
src/data/                    Dados dos projetos e contatos
src/pages/                   Home e detalhes de projeto
src/App.tsx                  Composição da aplicação e navegação
src/App.css                  Layouts e estilos dos componentes
src/index.css                Fontes, variáveis e estilos globais
src/paths.ts                 Caminhos relativos à base de publicação
vite.config.ts               Configuração do build
```

## Atualizar o portfólio

**Trabalhos:** cadastre os dados exclusivamente em [`src/data/projects.ts`](src/data/projects.ts): `slug`, `title`, `category`, `year`, `description` e imagens. Os cards, as páginas individuais e os links de navegação utilizam esse cadastro.

Coloque as imagens de cada trabalho em sua própria pasta:

```text
src/assets/projects/
├── projeto-01/
│   ├── cover.jpg
│   ├── 01.jpg
│   ├── ...
│   └── 08.jpg
└── projeto-02/
    ├── cover.jpg
    ├── 01.jpg
    └── ...
```

Use `cover.jpg` somente na capa do card. Cadastre as demais imagens com URLs estáticas, como `new URL('../assets/projects/projeto-02/01.jpg', import.meta.url).href`, seguindo o exemplo de Pedro Lucas. O Vite processa os arquivos para desenvolvimento e publicação no GitHub Pages. Adicionar uma pasta não cadastra o projeto automaticamente.

A página mantém as posições do layout existente: `mainImage` abre o case, `images` reúne as pranchas de identidade, `applications` ocupa a seção de contexto e `mockups` recebe as imagens restantes. Em Pedro Lucas, essas posições usam respectivamente `01.jpg`, `02.jpg` a `04.jpg`, `05.jpg` e `06.jpg` a `08.jpg`, sem repetir a capa. As listas aceitam mais imagens conforme necessário.

Preencha `alt` e `caption` em cada imagem e omita `placeholder` nas imagens definitivas. Nos projetos demonstrativos que usam `...template`, coloque os campos específicos depois dessa expansão para sobrescrever os valores compartilhados. O `slug` define o endereço `/projetos/{slug}`.

**Apresentação:** altere os textos em [`Hero.tsx`](src/components/Hero.tsx) e [`About.tsx`](src/components/About.tsx).

**Contato:** atualize os links de WhatsApp, Instagram e e-mail em [`src/data/contact.ts`](src/data/contact.ts).

**Aparência:** ajuste os estilos globais em [`src/index.css`](src/index.css) e os layouts em [`src/App.css`](src/App.css).

**Metadados:** edite o título e a descrição em [`index.html`](index.html). Os títulos exibidos durante a navegação são definidos em [`src/App.tsx`](src/App.tsx).

## Publicação

O projeto está configurado para o endereço **https://mpdevtech.github.io/portfolio-mp/**. O [workflow de deploy](.github/workflows/deploy.yml) executa a cada push na branch `main`, incluindo merges, e publica apenas após o sucesso do lint e do build.

Para configurar o repositório:

1. Abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para `main` e acompanhe a execução na aba **Actions**.

Para disparar manualmente, use **Actions → Deploy to GitHub Pages → Run workflow**.

O workflow instala as dependências com `npm ci` e publica a pasta `dist/`, sem necessidade de uma branch `gh-pages` ou token pessoal. A base `/portfolio-mp/` está definida em [`vite.config.ts`](vite.config.ts) e deve ser ajustada se o endereço de publicação mudar.

O build também gera uma página de entrada para cada projeto cadastrado e um `404.html`. Isso permite abrir ou recarregar os links dos cases diretamente no GitHub Pages.

## Autoria

**Marcos Paulo — Designer Gráfico**

- [Instagram: @mpdesign.studio](https://www.instagram.com/mpdesign.studio/)
- [E-mail: mpdesign.marcos@gmail.com](mailto:mpdesign.marcos@gmail.com)
- [GitHub: mpdevtech](https://github.com/mpdevtech)

## Licença

O repositório ainda não possui um arquivo de licença para o código e o conteúdo visual. As fontes possuem licenças próprias: [Inter](public/fonts/inter-OFL.txt) e [Space Grotesk](public/fonts/space-grotesk-OFL.txt).
