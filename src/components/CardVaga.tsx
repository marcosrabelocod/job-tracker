import type {Vaga} from "@/src/type/Vaga";
import Link from 'next/link'

//essa interface deixa muito mais facil desencapsular o parametro vaga
interface CardVagasProps{
    vaga:Vaga
}

export default function CardVaga({vaga}: CardVagasProps){
    return(
        <div className="bg-white p-4 rounded-xl shadow border border-slate-200 hover:shadow-md transition">
            <h3 className="font-bold text-lg text-slate-800">{vaga.titulo}</h3>
            <p className="text-sm text-slate-500 mb-2">{vaga.empresa}</p>


            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium mb-3">
                {vaga.area}
            </span>

            {/*sistema de tags preparado para receber eventos de click e filtro*/}
            <div className="flex flex-wrap gap-2 mb-4">
                {vaga.tecnologias.map((tag, index) => (
                    <Link href={`/tag/${tag}`} key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full border border-slate-200">
                        {tag}
                    </Link>
                ))}
            </div>

            <a href={vaga.link} 
            className="text-sm font-semibold text-blue-600 hover:underline" 
            target="_blank">
                Ver Vaga
            </a>
        </div>
    )
}