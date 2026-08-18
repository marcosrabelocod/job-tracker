import {UserInstace} from '@/src/type/Usuario'

export default function perfil(){
    return(
        <>
            <h1 className="text-3x1 fontbold text-slate-800">
                Profile
            </h1>
            <hr />
            <div className="relative w-full max-w-sm">
                <h2>Stacks</h2>
                {UserInstace.Stacks.map(staks => (
                    <span className="inline-flex items-center bg-transparent border border-slate-200 rounded-md shadow-sm overflow-hidden transition duration-300 ease hover:border-slate-300 hover:shadow-md text-slate-700 text-sm">
      
                        {/* O texto da coluna fica aqui */}
                        <span className="px-3 py-2">
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
                <input type="text" 
                    placeholder='Adicionar Coluna...'
                    className="w-full bg-transparent:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-12 py-2 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-100 ring-4 ring-transparent focus:ring-slate-100" />
                    
                </div>
                <button
                    type="button"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-slate-100 text-slate-600 rounded hover:bg-slate-200 hover:text-slate-900 transition flex items-center justify-center font-bold text-lg"
                >
                    +
                </button>
        </>
    )
}