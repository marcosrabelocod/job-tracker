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

export const MockVagas: Vaga[] = [
  {
    id: '1',
    empresa: 'BairesDev',
    titulo: 'Junior React Frontend Engineer - Remote Work',
    area: 'Next/TypeScript',

    descricao: 'Atuar na manutenção de um dashboard SaaS...',
    link: 'https://linkedin.com/vaga1',
    tecnologias: ['Next', 'React', 'Tailwind', 'mvc', 'gitlab'],
    data: '23/08/2026',
    regime: 'homeoffice'

  }/*
  {
    id: '2',
    empresa: 'FCamara',
    titulo: 'Desenvolvedor Front-end React - Junior',
    area: 'Next/TypeScript',
    descricao:
      'Desenvolvimento de aplicações frontend utilizando React em uma oportunidade júnior com possibilidade de trabalho remoto.',
    link: 'https://br.linkedin.com/jobs/react-developer-remote-work-vagas',
    tecnologias: ['React', 'JavaScript', 'TypeScript']
  },
  {
    id: '3',
    empresa: 'Zummit',
    titulo: 'Desenvolvedor(a) Full-Stack Jr. — Remoto',
    area: 'Next/TypeScript',
    descricao:
      'Desenvolvimento full stack em posição júnior, com React entre as tecnologias utilizadas e trabalho remoto.',
    link: 'https://br.linkedin.com/jobs/desenvolvedor-full-stack-j%C3%BAnior-vagas',
    tecnologias: ['React', 'Java', 'JavaScript']
  },
  {
    id: '4',
    empresa: 'AI/R',
    titulo: 'React / Java Full-Stack Developer | Júnior',
    area: 'Next/TypeScript',
    descricao:
      'Atuação como desenvolvedor full stack júnior utilizando React em uma oportunidade remota.',
    link: 'https://br.linkedin.com/jobs/react.js-%2B-node.js-developer-vagas',
    tecnologias: ['React', 'Java', 'JavaScript']
  },
  {
    id: '5',
    empresa: 'Jobgether',
    titulo: 'Desenvolvedor Front-end React - Junior',
    area: 'Next/TypeScript',
    descricao:
      'Desenvolvimento frontend utilizando React em uma oportunidade júnior e remota no Brasil.',
    link: 'https://br.linkedin.com/jobs/react-developer-remote-work-vagas',
    tecnologias: ['React', 'JavaScript', 'TypeScript']
  },
  {
    id: '6',
    empresa: 'BairesDev',
    titulo: 'Full Stack Next.js Developer - Remote Work',
    area: 'Next/TypeScript',
    descricao:
      'Desenvolvimento full stack utilizando Next.js em uma posição com trabalho remoto.',
    link: 'https://br.linkedin.com/jobs/bairesdev-desenvolvedor-javascript-vagas',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Node.js']
  },
  {
    id: '7',
    empresa: 'Zummit',
    titulo: 'Desenvolvedor Java Júnior',
    area: 'Java/SpringBoot',
    descricao:
      'Atuação no desenvolvimento e manutenção de aplicações backend utilizando Java e Spring Boot.',
    link: 'https://br.linkedin.com/jobs/desenvolvedor-java-junior-vagas',
    tecnologias: ['Java', 'Spring Boot', 'SQL', 'Git']
  },
  {
    id: '8',
    empresa: 'Stefanini',
    titulo: 'Desenvolvedor Java Júnior',
    area: 'Java/SpringBoot',
    descricao:
      'Desenvolvimento de aplicações backend utilizando Java, Spring Boot e APIs REST em ambiente remoto.',
    link: 'https://br.linkedin.com/jobs/desenvolvedor-java-vagas',
    tecnologias: ['Java', 'Spring Boot', 'REST API', 'SQL']
  },
  {
    id: '9',
    empresa: 'CI&T',
    titulo: 'Desenvolvedor Java Júnior',
    area: 'Java/SpringBoot',
    descricao:
      'Desenvolvimento de soluções backend utilizando Java e Spring Boot, participando de projetos de software em equipe.',
    link: 'https://br.linkedin.com/jobs/desenvolvedor-java-junior-vagas',
    tecnologias: ['Java', 'Spring Boot', 'Docker', 'Git']
  },
  {
    id: '10',
    empresa: 'IBM',
    titulo: 'Java Developer — Júnior',
    area: 'Java/SpringBoot',
    descricao:
      'Atuação no desenvolvimento de sistemas utilizando Java, APIs REST e frameworks do ecossistema Spring.',
    link: 'https://br.linkedin.com/jobs/java-developer-vagas',
    tecnologias: ['Java', 'Spring Boot', 'REST API', 'SQL']
  },
  {
    id: '11',
    empresa: 'Capgemini',
    titulo: 'Desenvolvedor Java Júnior',
    area: 'Java/SpringBoot',
    descricao:
      'Desenvolvimento e manutenção de aplicações Java utilizando Spring Boot e integração com APIs.',
    link: 'https://br.linkedin.com/jobs/desenvolvedor-java-junior-vagas',
    tecnologias: ['Java', 'Spring Boot', 'REST API', 'Git']
  },
  {
    id: '12',
    empresa: 'BairesDev',
    titulo: 'Junior Java Developer — Remote Work',
    area: 'Java/SpringBoot',
    descricao:
      'Desenvolvimento de aplicações backend Java em uma equipe distribuída, com possibilidade de trabalho remoto.',
    link: 'https://br.linkedin.com/jobs/java-developer-remote-vagas',
    tecnologias: ['Java', 'Spring Boot', 'SQL', 'Git']
  },
  {
    id: '13',
    empresa: 'VR SOFTWARE',
    titulo: 'Auxiliar de Suporte (PDV) - Unidade Belém',
    area: 'Suporte',
    descricao:
      'Atuação no suporte ao ambiente de PDV, auxiliando clientes na identificação e resolução de problemas que impactam a operação dos caixas.',
    link:
      'https://br.linkedin.com/jobs/view/auxiliar-de-suporte-pdv-unidade-bel%C3%A9m-at-vr-software-4452480836',
    tecnologias: ['Suporte Técnico', 'PDV', 'Atendimento', 'Sistemas']
  },
  {
    id: '14',
    empresa: 'G4F',
    titulo: 'Técnico de Suporte a Usuário de TI Pleno',
    area: 'Suporte',
    descricao:
      'Suporte presencial e remoto aos usuários, atuando com hardware, software, sistemas operacionais, redes e infraestrutura de TI.',
    link:
      'https://br.linkedin.com/jobs/view/tecnico-de-suporte-a-usuario-de-ti-pleno-at-g4f-4447142937',
    tecnologias: [
      'Suporte Técnico',
      'Hardware',
      'Software',
      'Redes',
      'Infraestrutura'
    ]
  },
  {
    id: '15',
    empresa: 'Grupo Equatorial',
    titulo: 'Analista de Suporte',
    area: 'Suporte',
    descricao:
      'Atuação na área de suporte de TI em Belém, prestando atendimento e suporte aos usuários e sistemas da organização.',
    link: 'https://br.linkedin.com/jobs/analista-de-suporte-vagas-belém',
    tecnologias: ['Suporte Técnico', 'TI', 'Atendimento', 'Sistemas']
  },
  {
    id: '16',
    empresa: 'Techlead IT Solutions',
    titulo: 'Analista de Suporte Jr. (N1 - Infraestrutura)',
    area: 'Suporte',
    descricao:
      'Atuação em suporte de primeiro nível e infraestrutura de TI, realizando atendimento e resolução de incidentes.',
    link: 'https://br.linkedin.com/jobs/analista-de-suporte-vagas-belém',
    tecnologias: [
      'Suporte N1',
      'Infraestrutura',
      'Redes',
      'Hardware',
      'Software'
    ]
  },
  {
    id: '17',
    empresa: 'FADESP',
    titulo: 'Analista de Governança de TI',
    area: 'Suporte',
    descricao:
      'Atuação na área de tecnologia da informação em Belém, apoiando processos, controles e atividades relacionadas à governança de TI.',
    link: 'https://br.linkedin.com/jobs/analista-de-ti-vagas-belém',
    tecnologias: ['TI', 'Governança', 'Processos', 'Tecnologia']
  }*/
];
