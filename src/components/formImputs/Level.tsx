import { User } from "@/src/type/Usuario";

export default function Level(){
    const niveisDeSenioridade = ['Estágio', 'Júnior', 'Pleno', 'Sênior'];
    return(
        <div className="mt-6 w-full max-w-sm">
    <label className="block mb-3 text-sm font-semibold text-slate-800">
        Nível de Senioridade
    </label>
    
    <div className="grid grid-cols-2 gap-3">
        {/* Opção 1: Estágio */}
        <div className="flex items-center ps-4 border border-slate-200 bg-white rounded-md hover:border-slate-300">
            <input 
                id="radio-estagio" 
                type="radio" 
                value="Estágio" 
                name="senioridade" 
                className="w-4 h-4 text-slate-800 border-slate-300 bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-500 cursor-pointer" 
            />
            <label htmlFor="radio-estagio" className="w-full py-3 select-none ms-2 text-sm font-medium text-slate-700 cursor-pointer">
                Estágio
            </label>
        </div>

        {/* Opção 2: Júnior */}
        <div className="flex items-center ps-4 border border-slate-200 bg-white rounded-md hover:border-slate-300">
            <input 
                id="radio-junior" 
                type="radio" 
                value="Júnior" 
                name="senioridade" 
                className="w-4 h-4 text-slate-800 border-slate-300 bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-500 cursor-pointer" 
            />
            <label htmlFor="radio-junior" className="w-full py-3 select-none ms-2 text-sm font-medium text-slate-700 cursor-pointer">
                Júnior
            </label>
        </div>

        {/* Opção 3: Pleno */}
        <div className="flex items-center ps-4 border border-slate-200 bg-white rounded-md hover:border-slate-300">
            <input 
                id="radio-pleno" 
                type="radio" 
                value="Pleno" 
                name="senioridade" 
                className="w-4 h-4 text-slate-800 border-slate-300 bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-500 cursor-pointer" 
            />
            <label htmlFor="radio-pleno" className="w-full py-3 select-none ms-2 text-sm font-medium text-slate-700 cursor-pointer">
                Pleno
            </label>
        </div>

        {/* Opção 4: Sênior */}
        <div className="flex items-center ps-4 border border-slate-200 bg-white rounded-md hover:border-slate-300">
            <input 
                id="radio-senior" 
                type="radio" 
                value="Sênior" 
                name="senioridade" 
                className="w-4 h-4 text-slate-800 border-slate-300 bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-500 cursor-pointer" 
            />
            <label htmlFor="radio-senior" className="w-full py-3 select-none ms-2 text-sm font-medium text-slate-700 cursor-pointer">
                Sênior
            </label>
        </div>
    </div>
</div>
    )
}