import { DownloadSimpleIcon } from "@phosphor-icons/react";

function AsideCourseContent() {
    return (
        <div className="flex flex-col w-[20%]">
            <h1 className="font-semibold text-[20px]">Conteúdo do Curso</h1>
            <div>
                <div className="flex justify-between">
                    <span className="">Progresso</span>
                    <span>45% concluído</span>
                </div>
                <progress id="file" value="45" max="100" className=""> 32% </progress>
            </div>

            <details>
                <summary>Módulo 1: Introdução</summary>
                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>1. O que é o React?</p>
                    <span>12:00</span>
                </div>

                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>2. Configurando o ambiente</p>
                    <span>08:45</span>
                </div>
            </details>

            <details>
                <summary>Módulo 2: O Coração do React</summary>
                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>3. JSX desvendado</p>
                    <span>22:15</span>
                </div>

                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>4. Props e Componentes</p>
                    <span>EM REPRODUÇÃO</span>
                </div>

                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>5. State e Clico de vida</p>
                    <span>EM REPRODUÇÃO</span>
                </div>

                <div>
                    <input type="checkbox" name="checkDone" id="checkDone" />
                    <p>6. State e Ciclo de Vida</p>
                    <span>45:10</span>
                </div>
            </details>

            <details>
                <summary>Módulo 3: Hooks e Além</summary>
            </details>

            <button>
                <DownloadSimpleIcon size={32} />
            </button>
            <span>Baixar Certificado</span>
        </div>
    )
}

export default AsideCourseContent