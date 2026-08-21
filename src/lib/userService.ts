'use server'
import fs from 'fs/promises'
import path from 'path'
import { User, UserInstace } from '@/src/type/Usuario'

//criação de arquivo json para armazenamento interno de dados
const FILE_PATH = path.join(process.cwd(), 'src/data', 'data.json');


//primeiro faremos uma verificação do arquivo, caso ele não exista o sistema criara um
export async function inicializeDataFile(): Promise<void> {
    try{
        await fs.access(FILE_PATH)
    }catch{
        //verificação de existencia da pasta
        await fs.mkdir(path.dirname(FILE_PATH), {recursive: true})

        await fs.writeFile(FILE_PATH, JSON.stringify(UserInstace), 'utf-8')
    }
}

export async function saveUser(newUser: User): Promise<void>{
    await inicializeDataFile()
    //a intenção é sempre sobrescrever o usuario para que tenhamos apenas um usuario logado
    await fs.writeFile(FILE_PATH, JSON.stringify(newUser, null, 2), 'utf-8');
}

export async function getUser(): Promise<User> {
    await inicializeDataFile()

    const fileContent = await fs.readFile(FILE_PATH, 'utf-8')
    let user: User = JSON.parse(fileContent) as User

    return user
}