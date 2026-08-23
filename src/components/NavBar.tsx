import Link from 'next/link'

export default function NavBar(){
    return(
        <nav className="fixed w-full z-20 top-0 start-0 bg-white shadow-md border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                {/* Logo / Título */}
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                {/* Você pode substituir este SVG por sua própria logo ou ícone */}
                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">JT</span>
                    </div>
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-800">
                        Job Tracker
                    </span>
                </Link>

                {/* Botão Menu Mobile (Oculto no Desktop) */}
                <button 
                    data-collapse-toggle="navbar-default" 
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                >
                    <span className="sr-only">Abrir menu principal</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Links de Navegação */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link 
                                href="/" 
                                className="block py-2 px-3 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 transition-colors duration-200"
                            >
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/profile" 
                                className="block py-2 px-3 text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 transition-colors duration-200"
                            >
                                Conta
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}