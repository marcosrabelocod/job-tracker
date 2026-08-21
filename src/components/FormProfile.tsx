'use client'
import { useState } from "react"
import { User } from "@/src/type/Usuario"
interface DataAtions{
    user: User
}
export default function FormProfile({user}: DataAtions){
    const [profile, setProfile] = useState(user)
    return(
        <>
            <main className="p-10 min-h-screen bg-slate-50">
                <h1 className="text-3x1 fontbold text-slate-800">
                    Profile
                </h1>
                <hr />
                <div className="relative w-full max-w-sm">
                    <h2>Stacks</h2>
                    {profile.Stacks.map(staks=> (
                        <span key={staks} className="inline-flex items-center bg-transparent border border-slate-200 rounded-md shadow-sm overflow-hidden transition duration-300 ease hover:border-slate-300 hover:shadow-md text-slate-700 text-sm mx-2 my-1">
        
                            {/* O texto da coluna fica aqui */}
                            <span className="px-3 py-2 ">
                                {staks}
                            </span>

                            {/* O botão integrado (geralmente um 'X' para remover a coluna ou um '+' para expandir) */}
                            <button 
                                type="button"
                                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 hover:text-red-500 transition font-bold border-l border-slate-200 flex items-center justify-center cursor-pointer"
                                aria-label="Remover coluna"
                            >
                                ×
                            </button>
                        
                        </span>
                    ))}
                    <div className="w-full max-w-sm min-w-[200px]">
                        <div className="relative">
                            <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Nova Categoria" />
                            <button
                            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            >
                            Adicionar
                            </button>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}