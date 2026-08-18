export interface Vaga {
    id: string;
    empresa: string;
    titulo: string;
    area: string;
    descricao: string;
    link: string;
    tecnologias: string[]
}

export const MockVagas: Vaga[] =[
    {
    id: '1',
    empresa: 'Tech Corp',
    titulo: 'Desenvolvedor Frontend Junior',
    area: 'Next/TypeScript',
    descricao: 'Atuar na manutenção de um dashboard SaaS...',
    link: 'https://linkedin.com/vaga1',
    tecnologias: ['Next', 'React', 'Tailwind'] 
  },
]