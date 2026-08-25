import type { UF } from "@/src/type/Usuario";
import { estadosDoBrasil } from "@/src/type/Usuario";
interface UfActions{
    UF : UF
    handleUf: (UF: UF) => void
}

export default function UfSelection({UF, handleUf}: UfActions){
    return(
        <div>
            <label  className="block mb-2.5 text-sm font-medium text-heading">Selecione UFPA</label>
            <select
                value={UF} 
                onChange={(e) => handleUf(e.target.value as UF)}
                className="block w-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs text-fg-disabled">
                
                <option value={UF}>{UF}</option>
                {estadosDoBrasil.filter((unidade : UF) => unidade !== UF).map(estados =>(
                <option 
                key={estados}
     
                 >{estados}</option>
                ))}
            </select>
        </div>
    )
}