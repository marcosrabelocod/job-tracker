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

export default function FormProfile({user}: DataAtions){
    const [staks, setStaks] = useState(user.Stacks)


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

    const formAction = (e: React.SubmitEvent) =>{
        e.preventDefault()
        
        const userAtualizado = {...user, Stacks: staks}

        saveUser(userAtualizado)
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
                    <Level/>

                    <hr className="m-4" />
                    <Work/>

                    <hr className="m-4"/>
                    <input type="submit" value="Salvar" className="text-white bg-slate-800 box-border border border-transparent hover:bg-slate-900 focus:ring-4 focus:ring-slate-300 shadow-sm font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none transition-colors"/>
                </form>
                
            </main>
        </>
    )
}