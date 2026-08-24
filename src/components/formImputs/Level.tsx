import { useState } from "react";

type NivelSenioridade = "Estagio" | "Junior" | "Pleno" | "Senior"
interface NivelAction{
    nivel: "Estagio" | "Junior" | "Pleno" | "Senior"
    handleNivel: (nivel:NivelSenioridade) => void
}

export default function Level({nivel, handleNivel}: NivelAction){
    const niveisDeSenioridade = ['Estágio', 'Júnior', 'Pleno', 'Sênior'];
    const senhoridadeInterface: NivelSenioridade[] = ["Estagio" , "Junior" , "Pleno" , "Senior"]
    const [nivelAtual, setNivelAtual] = useState(nivel) 
    return(
        <div className="mt-6 w-full max-w-sm">
    <label className="block mb-3 text-sm font-semibold text-slate-800">
        Nível de Senioridade
    </label>
    
    <div className="grid grid-cols-2 gap-3">
        {/* Opção 1: Estágio */}
        {senhoridadeInterface.map((senhoridade, index) =>(
            
        <div key={index} 
            className={`flex items-center ps-4 border border-slate-200 bg-white rounded-md hover:border-slate-300 
                ${senhoridade === nivelAtual
                    ?'border-slate-800 bg-slate-100 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`
            }
        >
            <input 
                
                id="radio-estagio" 
                type="radio" 
                value={senhoridade}
                onChange={() => {
                    setNivelAtual(senhoridade)
                    handleNivel(senhoridade)
                }}
                checked= {senhoridade === nivelAtual}
                name="senioridade" 
                className="w-4 h-4 text-slate-800 border-slate-300 bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-500 cursor-pointer" 
            />
            <label htmlFor="radio-estagio" className="w-full py-3 select-none ms-2 text-sm font-medium text-slate-700 cursor-pointer">
                {niveisDeSenioridade[index]}
            </label>
        </div>))}
    </div>
</div>
    )
}