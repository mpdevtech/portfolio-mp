export type ProjectImage = {
  src: string
  alt: string
  caption: string
  tone: 'dark' | 'paper' | 'warm'
  placeholder?: boolean
}

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  cover: ProjectImage
  mainImage: ProjectImage
  images: ProjectImage[]
  applications: ProjectImage
  mockups: ProjectImage[]
}

// Imagens demonstrativas dos projetos que ainda aguardam conteúdo final.
const image = (file: string, alt: string, caption: string, tone: ProjectImage['tone'] = 'dark'): ProjectImage => ({
  src: `/images/${file}`, alt, caption, tone, placeholder: true,
})

const template = {
  year: '[Inserir ano]',
  description: '[Insira uma breve descrição do projeto, seu contexto e a ideia central da solução visual. Duas ou três frases são suficientes.]',
  mainImage: image('case-main.svg', 'Composição de referência com anel laranja e detalhe azul escuro.', 'Visual principal · Substituir pela imagem do projeto'),
  images: [
    image('case-editorial.png', 'Composição editorial com duas folhas sobrepostas.', 'Identidade · Prancha visual', 'paper'),
    image('case-tipografia.png', 'Estudo tipográfico com as letras Aa e sublinhado laranja.', 'Detalhe · Tipografia'),
  ],
  applications: image('case-aplicacoes.png', 'Aplicações da identidade em peças gráficas sobrepostas.', 'Mockup principal · Aplicações da identidade', 'warm'),
  mockups: [
    image('case-digital.png', 'Aplicação digital em tela e dispositivo móvel.', 'Mockup · Experiência digital', 'paper'),
    image('case-poster.png', 'Pôster laranja com composição circular.', 'Mockup · Comunicação visual', 'warm'),
  ],
}

// URLs estáticas permitem ao Vite versionar e publicar as imagens na base do site.
const pedroLucasImages = [
  new URL('../assets/projects/projeto-01/01.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/02.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/03.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/04.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/05.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/06.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/07.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/08.jpg', import.meta.url).href,
  new URL('../assets/projects/projeto-01/09.jpg', import.meta.url).href,
].map((src, index): ProjectImage => ({
  src,
  alt: `Pedro Lucas — identidade visual, prancha ${String(index + 1).padStart(2, '0')}.`,
  caption: `Pedro Lucas · ${String(index + 1).padStart(2, '0')}`,
  tone: 'dark',
}))

const papelariaDaKaImages = [
  ['01', new URL('../assets/projects/projeto-02/01.png', import.meta.url).href],
  ['02', new URL('../assets/projects/projeto-02/02.png', import.meta.url).href],
  ['03', new URL('../assets/projects/projeto-02/03.png', import.meta.url).href],
  ['04', new URL('../assets/projects/projeto-02/04.png', import.meta.url).href],
  ['05', new URL('../assets/projects/projeto-02/05.png', import.meta.url).href],
  ['07', new URL('../assets/projects/projeto-02/07.png', import.meta.url).href],
  ['08', new URL('../assets/projects/projeto-02/08.png', import.meta.url).href],
].map(([number, src]): ProjectImage => ({
  src,
  alt: `Papelaria da KA — identidade visual, prancha ${number}.`,
  caption: `Papelaria da KA · ${number}`,
  tone: 'paper',
}))

export const projects: Project[] = [
  {
    slug: 'projeto-01',
    title: 'Pedro Lucas',
    category: 'Identidade visual',
    year: '2024',
    description: 'A marca surgiu com a missão de ajudar as pessoas a atingirem o seu máximo potencial físico através de um treinamento de força seguro e fundamentado na ciência.',
    cover: {
      src: new URL('../assets/projects/projeto-01/cover.jpg', import.meta.url).href,
      alt: 'Capa do projeto de identidade visual Pedro Lucas.',
      caption: 'Pedro Lucas · Identidade visual',
      tone: 'dark',
    },
    mainImage: pedroLucasImages[0],
    images: pedroLucasImages.slice(1, 4),
    applications: pedroLucasImages[4],
    mockups: pedroLucasImages.slice(5),
  },
  {
    slug: 'projeto-02',
    title: 'Papelaria da KA',
    category: 'Identidade visual',
    year: '2025',
    description: 'A Papelaria da Ka surgiu da necessidade de empreender e do desejo de oferecer produtos personalizados com excelência. Criada por uma profissional que trabalha em escola e percebeu de perto as demandas do dia a dia, a marca nasceu para atender com carinho e compromisso.',
    cover: {
      src: new URL('../assets/projects/projeto-02/cover.png', import.meta.url).href,
      alt: 'Capa do projeto de identidade visual Papelaria da KA.',
      caption: 'Papelaria da KA · Identidade visual',
      tone: 'paper',
    },
    mainImage: papelariaDaKaImages[0],
    images: papelariaDaKaImages.slice(1, 4),
    applications: papelariaDaKaImages[4],
    mockups: papelariaDaKaImages.slice(5),
  },
  { slug: 'projeto-03', title: 'Projeto 03', category: 'Campanha', cover: image('cover-campanha.png', 'Pôster laranja com círculo escuro.', 'Capa substituível', 'warm'), ...template },
  { slug: 'projeto-04', title: 'Projeto 04', category: 'Comunicação visual', cover: image('cover-tipografia.png', 'Letras Aa com sublinhado laranja.', 'Capa substituível'), ...template },
  { slug: 'projeto-05', title: 'Projeto 05', category: 'Projeto digital', cover: image('cover-digital.png', 'Composição de interface em tela e celular.', 'Capa substituível', 'paper'), ...template },
  { slug: 'projeto-06', title: 'Projeto 06', category: 'Identidade · Aplicações', cover: image('cover-aplicacoes.png', 'Aplicações gráficas em cartões sobrepostos.', 'Capa substituível', 'warm'), ...template },
]
