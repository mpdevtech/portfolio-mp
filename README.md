# Portfólio — Marcos Paulo

Implementação em React + TypeScript + Vite dos frames Home (`7:2126`) e Projeto (`7:2506`) do [Figma](https://www.figma.com/design/lZAtEZX5Sy4bIt6YAgFOdS/Sem-t%C3%ADtulo). CSS puro, sem novas dependências.

## Executar

```sh
npm install
npm run dev
```

Abra o endereço informado pelo Vite (normalmente http://localhost:5173).

```sh
npm run build   # TypeScript + build de produção em dist/
npm run lint    # Oxlint
npm run preview
```

## Organização

- `src/components/`: Hero, About, Contact, ProjectGrid/ProjectCard, ProjectGallery, ProjectMedia e elementos compartilhados em Layout (Header, Footer, Button, Eyebrow, Arrow).
- `src/pages/Home.tsx`: composição da página principal.
- `src/pages/Project.tsx`: template único para todos os projetos.
- `src/data/projects.ts`: slugs, títulos, categorias, anos, descrições, capas, galeria e mockups.
- `src/data/contact.ts`: WhatsApp, Instagram e e-mail.
- `src/index.css`: fontes locais, tokens e estilos globais.
- `src/App.css`: layout, componentes, interações e responsividade.
- `src/App.tsx`: navegação com History API, sem biblioteca adicional.
- `public/images/`: fotografias e composições originais exportadas pelo Figma MCP.
- `public/fonts/`: Inter e Space Grotesk com licenças OFL.

## Editar projetos

Cada card aponta para `/projetos/<slug>`. Altere os objetos em `src/data/projects.ts`. Cada projeto aceita uma capa independente, imagem principal, imagens da galeria, aplicação principal e mockups. Os seis projetos compartilham inicialmente o conteúdo de referência do template do Figma; sobrescreva os campos **depois de `...template`** para personalizá-los.

Os arquivos exportados são apenas as composições visuais dos trabalhos. Textos, legendas, links e toda a estrutura da página são HTML/CSS, não capturas de tela.

O Figma disponibiliza fotografias reais do Marcos e placeholders para os trabalhos. As capas e o template foram preservados, inclusive as notas de conteúdo editável. Faltam os nomes, anos, descrições e imagens definitivos dos cases. Não há carrossel visível no frame; foi mantida a galeria estática assimétrica. A versão mobile adapta a composição desktop, pois o arquivo não contém frames mobile.

## Navegação e publicação

Há rotas `/`, `/projetos/projeto-01` até `/projetos/projeto-06`, âncoras da Home e uma tela para rotas desconhecidas. A navegação anterior/próximo percorre os seis projetos de forma circular. Links preservam abertura em nova aba e o histórico do navegador.

O projeto está configurado para https://mpdevtech.github.io/portfolio-mp/, com `base: '/portfolio-mp/'` no Vite. Links e imagens usam essa base; fontes e preloads são ajustados pelo Vite. O build gera um `index.html` para cada projeto cadastrado e um `404.html`, permitindo abrir e recarregar os cases diretamente no GitHub Pages sem regras de servidor.

### Deploy pelo GitHub Actions

1. No repositório, acesse **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
2. Envie estas alterações para a branch `main`.
3. Acompanhe o workflow **Deploy to GitHub Pages** na aba **Actions**.

O workflow `.github/workflows/deploy.yml` executa a cada push na `main` (incluindo merges) e também pode ser iniciado por **Run workflow**. Usa Node.js 24, instala dependências com `npm ci`, executa lint e build e publica `dist/` com as actions oficiais do Pages. Não é necessário criar uma branch `gh-pages` nem cadastrar token pessoal.

Para testar o build localmente, execute `npm run build` e `npm run preview`, acessando `/portfolio-mp/` no endereço informado. Novos projetos cadastrados em `src/data/projects.ts` recebem suas páginas de entrada automaticamente no próximo build.

## Validação

Build TypeScript/Vite, lint e integridade dos assets locais verificados. A comparação das medidas foi feita com o contexto e as capturas do Figma. A inspeção visual da aplicação no navegador e a interação em dispositivos reais ainda precisam ser realizadas: o ambiente não disponibilizou navegador conectado nem permissão para controlar o Safari.
