export interface Vaga {
    id: string;
    empresa: string;
    titulo: string;
    area: string;
    descricao: string;
    link: string;
    //no campo tecnologias colocamos linguagens frameworks bibliotecas e ferramentas que a vaga possa exigir
    tecnologias: string[]
    data: string
    regime: 'homeoffice' | 'hibrido' | 'presencial'
}

export const MockVagas: Vaga[] =[
    {
    id: '1',
    empresa: 'Tech Corp',
    titulo: 'Desenvolvedor Frontend Junior',
    area: 'Next/TypeScript',
    descricao: 'Atuar na manutenção de um dashboard SaaS...',
    link: 'https://linkedin.com/vaga1',
    tecnologias: ['Next', 'React', 'Tailwind', 'mvc', 'gitlab'],
    data: '23/08/2026',
    regime: 'homeoffice'
  },
]