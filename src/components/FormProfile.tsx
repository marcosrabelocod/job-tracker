'use client'
import { useState } from "react"
import { User } from "@/src/type/Usuario"
import StackSelection from "@/src/components/formImputs/StackSelection"
import { saveUser } from "@/src/lib/userService"

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
                <hr />
                <form onSubmit={formAction}>
                    <StackSelection stacks={staks} handleStackAdd={handleStackAdd} handleStackDrop={handleStackDrop}/>
                    <input type="submit" value="Salvar" />
                </form>
                
            </main>
        </>
    )
}