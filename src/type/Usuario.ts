export interface User{
    work: string
    level:'Estagio' | 'Junior' | 'Pleno' | 'Senior'
    Stacks:string[]
}

export const UserInstace: User = {
    work:"Desenvolvedor",
    level: 'Junior',
    Stacks: ['Suporte', 'Next/TypeScript', 'Java/SpringBoot']
}