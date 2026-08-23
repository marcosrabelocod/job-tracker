export default function Work(){
    return(
        <div className="w-full max-w-sm min-w-[200px]">
            <label className="block mb-3 text-sm font-semibold text-slate-800">
                Area de Atuação
            </label>
            <div className="relative">
                <input 
                    type="text" 
                    className="w-full select-none bg-slate-100 placeholder:text-slate-400 text-slate-500 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow cursor-not-allowed" 
                    placeholder="Nova Categoria" 
                    value="salada" 
                    readOnly 
                />

                <button
                    className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Adicionar
                </button>
            </div>
        </div>
    )
}