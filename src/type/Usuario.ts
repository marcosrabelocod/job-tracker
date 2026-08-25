export interface User{
    work: string
    level:'Estagio' | 'Junior' | 'Pleno' | 'Senior'
    Stacks:string[]
    UF: UF
}
export type UF = 
    | "AC" | "AL" | "AP" | "AM" | "BA" | "CE" | "DF" | "ES" | "GO" 
    | "MA" | "MT" | "MS" | "MG" | "PA" | "PB" | "PR" | "PE" | "PI" 
    | "RJ" | "RN" | "RS" | "RO" | "RR" | "SC" | "SP" | "SE" | "TO";



export const UserInstace: User = {
    work:"Desenvolvedor",
    level: 'Junior',
    Stacks: ['Suporte', 'Next/TypeScript', 'Java/SpringBoot'],
    UF: 'PA'
}
export const estadosDoBrasil: UF[] = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", 
    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", 
    "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];