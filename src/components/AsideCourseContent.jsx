import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { IoIosArrowDown } from "react-icons/io";

function AsideCourseContent() {

    return (
        <div className="flex flex-col w-[25%] ml-auto mr-6 border-l border-[#CCC3D84D]">
            <h1 className="font-semibold text-[20px] mx-6 mt-6 text-base">Conteúdo do Curso</h1>
            <div className="flex flex-col justify-between align-middle m-6">
                <div className="flex justify-between">
                    <span className="font-semibold ">Progresso</span>
                    <span className="font-semibold">45% concluído</span>
                </div>
                <progress id="progress" value="45" max="100" className="mt-2 w-full [&::-webkit-progress-value]:bg-primary [&::-webkit-progress-bar]:bg-[#CCC3D84D] [&::-webkit-progress-bar]:h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg"> 32% </progress>
            </div>

            <details>
                <summary className="flex items-center justify-between cursor-pointer list-none bg-[#DEE8FF80] font-medium py-4 px-6">Módulo 1: Introdução <IoIosArrowDown className="text-[#7B7487] text-xl" /></summary>
                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>1. O que é o React?</p>
                        <span className="text-[15px] text-[#7B7487]">12:00</span>
                    </div>
                </div>

                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>2. Configurando o ambiente</p>
                        <span className="text-[15px] text-[#7B7487]">08:45</span>
                    </div>
                </div>
            </details>

            <details>
                <summary className="flex items-center justify-between cursor-pointer list-none bg-[#DEE8FF80] font-medium py-4 px-6">Módulo 2: O Coração do React <IoIosArrowDown className="text-[#7B7487] text-xl" /></summary>
                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>3. JSX desvendado</p>
                        <span className="text-[15px] text-[#7B7487]">22:15</span>
                    </div>
                </div>

                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>4. Props e Componentes</p>
                        <span>EM REPRODUÇÃO</span>
                    </div>
                </div>

                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>5. State e Clico de vida</p>
                        <span>EM REPRODUÇÃO</span>
                    </div>
                </div>

                <div className="flex py-4 px-6 gap-3 bg-[#DEE8FF80]/50">
                    <input type="checkbox" name="checkDone" id="checkDone" className="self-center appearance-none w-5 h-5 border border-[#CCC3D8] rounded-xs bg-white" />
                    <div>
                        <p>6. State e Ciclo de Vida</p>
                        <span className="text-[15px] text-[#7B7487]">45:10</span>
                    </div>
                </div>
            </details>

            <details>
                <summary className="flex items-center justify-between cursor-pointer list-none bg-[#DEE8FF80] font-medium py-4 px-6">Módulo 3: Hooks e Além <IoIosArrowDown className="text-[#7B7487] text-xl" /></summary>
            </details>

            <div className="h-full border-t border-[#CCC3D84D] cursor-pointer">
                <div className="flex m-6 items-center justify-center rounded-2xl bg-primary text-white font-medium p-3 gap-2">
                    <button className="cursor-pointer">
                        <DownloadSimpleIcon size={26} />
                    </button>
                    <span>Baixar Certificado</span>
                </div>
            </div>
        </div>
    )
}

export default AsideCourseContent