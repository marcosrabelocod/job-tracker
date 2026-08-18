import { MockVagas } from "@/src/type/Vaga"; 
import CardVaga from "@/src/components/CardVaga";

interface TagProps{
    params:Promise<{
        tag:string
    }>
}

export default async function TagList({params}: TagProps){
    const parametro = await params
    const tagVaga = parametro.tag


    const vagaGroup = MockVagas.filter(vaga => vaga.tecnologias.includes(tagVaga))

    return(
        <div>
            <div className="bg-slate-200/50 p-4 rounded-xl border border-slate-300 shadow-sm">
                        <h2 className="font-bold text-slate-700 mb-4 border-b border-slate-300 pb-2">
                          { tagVaga}
                        </h2>
                        <div className="flex flex-col gap-4">
                          {vagaGroup.map(vaga =>(
                            <CardVaga key={vaga.id} vaga={vaga}/>
                          ))}
                        </div>
                      </div>
        </div>
    )
}