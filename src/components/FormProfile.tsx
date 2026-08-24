'use client'
import { useState } from "react"
import { User } from "@/src/type/Usuario"
import StackSelection from "@/src/components/formImputs/StackSelection"
import { saveUser } from "@/src/lib/userService"
import Level from "@/src/components/formImputs/Level"
import Work from "@/src/components/formImputs/Work"

interface DataAtions{
    user: User
}
type NivelSenioridade = "Estagio" | "Junior" | "Pleno" | "Senior"

export default function FormProfile({user}: DataAtions){
    const [staks, setStaks] = useState(user.Stacks)
    const [nivel, setNivel] = useState(user.level)
    const [work, setWork] = useState(user.work)
    const [workErro, setWorkErro] = useState('')

    const handleStackDrop =(dropstack:string) => {
        //adicionar validações e verificações
        setStaks((prevStack: string[]) =>
        {return prevStack.filter((stack) => stack !== dropstack)})
    }
    const handleStackAdd = (stack: string) => {
        //adicionar validações e verificações
        setStaks((prevStack: string[]) =>
        {return [...prevStack, stack]})
    }
    const handleNivel = (nivel: NivelSenioridade) =>{
       setNivel(nivel) 
    }
    const handleWork = (work: string) => {
        setWork(work)
    }


    const workValidation = (job:string) =>{
        //não vamos usar a palavra work como parametro pois ela já esta reservada no parametro da função principal
        //a palavra work nos da acesso ao estado atual dos dados no json para voltar para lá em caso de erro
        if(job === ''){
            setWorkErro('A Area de atuação não pode estar vazia')
            return false
        }
        if(job.length > 255){
            setWorkErro('Limite maximo de caracteres exedido')
            return false
        }
        setWorkErro('')
        return true

    }


    const formAction = (e: React.SubmitEvent) =>{
        e.preventDefault()
        
        const userAtualizado: User = {work: work, level: nivel, Stacks: staks}
        if (workValidation(work)){
            saveUser(userAtualizado)
        }
    }

    return(
        <>
            <main className="p-10 min-h-screen bg-slate-50">
                <h1 className="text-3x1 fontbold text-slate-800">
                    Profile
                </h1>
                <hr className="m-4" />
                <form onSubmit={formAction}>
                    <StackSelection stacks={staks} handleStackAdd={handleStackAdd} handleStackDrop={handleStackDrop}/>
                    
                    <hr className="m-4" />
                    <Level nivel={user.level} handleNivel={handleNivel}/>

                    <hr className="m-4" />
                    <Work work={user.work} handleWork={handleWork}/>
                    <span className="text-red-500">{workErro}</span>

                    <hr className="m-4"/>
                    <input type="submit" value="Salvar" className="text-white bg-slate-800 box-border border border-transparent hover:bg-slate-900 focus:ring-4 focus:ring-slate-300 shadow-sm font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none transition-colors"/>
                </form>
                
            </main>
        </>
    )
}