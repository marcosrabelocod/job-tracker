import { useState } from "react"

interface WorkAction {
    work: string
    handleWork: (work:string) => void
}
export default function Work({work, handleWork}: WorkAction){
    const [readMode, setReadMode] = useState(true)
    const [workAtual, setWorkAtual] = useState(work)

    return(
        <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-3 text-sm font-semibold text-slate-800">
                Area de Atuação
            </label>
            <div className="relative">
                <input 
                    type="text" 
                    className={`w-full text-sm border rounded-md pl-3 pr-20 py-2 transition duration-300 ease shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 ${
                        readMode 
                            ? "bg-slate-100 text-slate-500 border-slate-200 cursor-not-allowed select-none" // Estilo bloqueado
                            : "bg-white text-slate-800 border-slate-300 focus:border-slate-500 hover:border-slate-400" // Estilo liberado
                    }`}
                    placeholder="Novo Emprego"
                    value={workAtual}
                    onChange={(e) => {
                            handleWork(e.target.value)
                            setWorkAtual(e.target.value)
                       }}
                    readOnly = {readMode}
                />

                <button
                    className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => setReadMode(prevReadMode => !prevReadMode)}
                >
                    editar
                </button>
        
            </div>
        </div>
    )
}