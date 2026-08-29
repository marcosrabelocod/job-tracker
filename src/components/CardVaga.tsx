import type {Vaga} from "@/src/type/Vagas";
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

            <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium">
                    {vaga.area}
                </span>

                <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded font-medium">{vaga.regime}</span>
            </div>
            {/*sistema de tags preparado para receber eventos de click e filtro*/}
            <div className="flex flex-wrap gap-2 mb-4">
                {vaga.tecnologias.map((tag, index) => (
                    <Link href={`/tag/${tag}`} key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full border border-slate-200">
                        {tag}
                    </Link>
                ))}
            </div>

            <div className="flex item-center justify-between pt-3 mt-1 border-t border-slate-100">
                <a href={vaga.link} 
                className="text-sm font-semibold text-blue-600 hover:underline" 
                target="_blank">
                    Ver Vaga
                </a>

                <span className="text-xs font-medium text-slate-400">{vaga.data}</span>
            </div>
        </div>
    )
}