

export function Cursos(){

    return (
        <>
            <div className="mt-10">
                <div>
                    <h2 className="text-2xl font-bold mb-12">Módulos da Trilha</h2>
                </div>
                <div>
                    <div className="grid gap-5 rounded-md cursor-pointer  border-indigo-500/100  bg-zinc-800 p-4 max-w-[250px] sm:max-w-[290px]">
                        <img className="w-[100px]" src="https://khodar.turbokodemz.com/images/javascripticons/JSLogo.svg" alt="" />
                        <div className="grid gap-2">
                            <h2 className="text-2xl">Introdução</h2>
                            <p className="line-clamp-2">Este módulo introdutório visa ensinar como aproveitar ao máximo o treinamento de JavaScript e usar a linguagem em diferentes áreas, como desenvolvimento web, back-end, mobile e Internet das Coisas (IoT).</p>
                        </div>
                        <div className="flex gap-4">
                            <img src="https://khodar.turbokodemz.com/images/javascripticons/Icon1.svg" alt="" />
                            <img src="https://khodar.turbokodemz.com/images/javascripticons/Icon1.svg" alt="" />
                            <img src="https://khodar.turbokodemz.com/images/javascripticons/Icon1.svg" alt="" />
                            <img src="https://khodar.turbokodemz.com/images/javascripticons/Icon1.svg" alt="" />
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}