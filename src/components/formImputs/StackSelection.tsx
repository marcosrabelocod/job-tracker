'use client'
import { useState } from "react"

interface StackAction{
    stacks: string[]
    handleStackDrop: (stack: string) => void
    handleStackAdd: (stack: string) => void
}
export default function StackSelection({stacks, handleStackDrop, handleStackAdd}:StackAction){
    const [addStack, setAddStack] = useState('')

    return(
        
        <div className="relative w-full">
                    <h2>Stacks</h2>
                    {stacks.map(stack => (
                        <span key={stack} className="inline-flex items-center bg-transparent border border-slate-200 rounded-md shadow-sm overflow-hidden transition duration-300 ease hover:border-slate-300 hover:shadow-md text-slate-700 text-sm mx-2 my-1">
        
                            {/* O texto da coluna fica aqui */}
                            <span className="px-3 py-2 ">
                                {stack}
                            </span>

                            {/* O botão integrado (geralmente um 'X' para remover a coluna ou um '+' para expandir) */}
                            <button 
                                type="button"
                                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 hover:text-red-500 transition font-bold border-l border-slate-200 flex items-center justify-center cursor-pointer"
                                aria-label="Remover coluna"
                                onClick={() => handleStackDrop && handleStackDrop(stack)}
                            >
                                ×
                            </button>
                        
                        </span>
                    ))}
                    <div className="w-full max-w-sm min-w-[200px]">
                        <div className="relative">
                            <input type="text" 
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Nova Categoria" 
                                value={addStack} onChange={(e) => setAddStack(e.target.value)}
                                //all garantindo que ao apertar enter ele adiciona a coluna
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && handleStackAdd && addStack.trim() !== '') {
                                        e.preventDefault(); // Evita que o Enter recarregue a página se estiver num form
                                        handleStackAdd(addStack);
                                        setAddStack('');
                                    }
                                }}
                            />

                            <button
                            className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={() => {
                                if (handleStackAdd && addStack.trim() !== '') {
                                handleStackAdd(addStack)
                                setAddStack('')
                                }
                            }}
                            >
                            Adicionar
                            </button>
                        </div>
                    </div>
                </div>
    )
}