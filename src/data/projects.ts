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

// As seis capas e o case são referências do Figma, ainda sem conteúdo final.
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

export const projects: Project[] = [
  { slug: 'projeto-01', title: 'Projeto 01', category: 'Identidade visual', cover: image('cover-identidade.svg', 'Anel laranja com pequeno detalhe azul escuro.', 'Capa substituível'), ...template },
  { slug: 'projeto-02', title: 'Projeto 02', category: 'Design gráfico · Editorial', cover: image('cover-editorial.png', 'Folhas de papel sobrepostas em composição editorial.', 'Capa substituível', 'paper'), ...template },
  { slug: 'projeto-03', title: 'Projeto 03', category: 'Campanha', cover: image('cover-campanha.png', 'Pôster laranja com círculo escuro.', 'Capa substituível', 'warm'), ...template },
  { slug: 'projeto-04', title: 'Projeto 04', category: 'Comunicação visual', cover: image('cover-tipografia.png', 'Letras Aa com sublinhado laranja.', 'Capa substituível'), ...template },
  { slug: 'projeto-05', title: 'Projeto 05', category: 'Projeto digital', cover: image('cover-digital.png', 'Composição de interface em tela e celular.', 'Capa substituível', 'paper'), ...template },
  { slug: 'projeto-06', title: 'Projeto 06', category: 'Identidade · Aplicações', cover: image('cover-aplicacoes.png', 'Aplicações gráficas em cartões sobrepostos.', 'Capa substituível', 'warm'), ...template },
]
