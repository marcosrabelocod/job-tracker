import { MockVagas } from "@/src/type/Vagas"; 
import CardVaga from "@/src/components/CardVaga";
import { UserInstace } from "../type/Usuario";


export default function Home() {
  // Primeiro mapeamos todas as abilidades do usuario
  //essa separação sera util para categorizar cada vaga 
  //O indice dos nomes sera usado para organizar as listas de vagas
  const divisions = UserInstace.Stacks.map(stack =>{

    //apos isso separamos cada vaga pela abilidade que ela corresponde 
    return MockVagas.filter(vaga => vaga.area === stack)

    //então adicionamos a lista a uma lista maior com todas as vagas separadas 
    //O indice dessas lista corresponde ao nome delas na lista UserInstace.Stacks
  })

  return (
      <main className="p-10 min-h-screen bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800">Vagas</h1>
        
        {/* O Grid com 3 colunas (1 coluna no celular, 3 no desktop) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          

          {//separamos as listas para imprimir e extraimos o index para categorizar
          divisions.map((area, index) =>(
          <div key={index} className="bg-slate-200/50 p-4 rounded-xl border border-slate-300 shadow-sm">
            <h2 className="font-bold text-slate-700 mb-4 border-b border-slate-300 pb-2">
              {//aqui nos aproveitamos a compatibilidade de index das listas
              UserInstace.Stacks[index]}
            </h2>
            <div className="flex flex-col gap-4">
              {area.map(vaga =>(
                <CardVaga key={vaga.id} vaga={vaga}/>
              ))}
            </div>
          </div>
          ))}

        </div>
      </main>
  );
}