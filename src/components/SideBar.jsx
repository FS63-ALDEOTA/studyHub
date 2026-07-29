import { HouseIcon, GraduationCapIcon, CalendarDotsIcon, NotePencilIcon, UserIcon, GearIcon, HeartIcon, SparkleIcon, SignOutIcon } from "@phosphor-icons/react";


function SideBar() {
    return (
        <>
            <div className="flex h-screen w-[15%] flex-col justify-between border-r border-[#CCC3D8]">
                <div className="mx-4 py-4">
                    <h1 className="px-4 font-bold text-primary text-[20px]">StudyHub</h1>
                    <h3 className="mx-4 font-semibold text-[14px]">Excelência Acadêmica</h3>
                </div>
                <div className="flex flex-1 flex-col gap-2 mx-2 overflow-hidden">
                    <button className="flex items-center gap-2 p-2 mx-4"><HouseIcon size={26} /> Início</button>
                    <button className="flex items-center gap-2 p-2 mx-4"><GraduationCapIcon size={26} /> Meus Cursos</button>
                    <button className="flex items-center gap-2 p-2 mx-4"><NotePencilIcon size={26} /> Atividades </button>
                    <button className="flex items-center gap-2 p-2 mx-4"> <CalendarDotsIcon size={26} /> Calendário</button>
                    <button className="flex items-center gap-2 p-2 mx-4"><HeartIcon size={26} /> Favoritos </button>
                    <button className="flex items-center gap-2 p-2 mx-4"><UserIcon size={26} /> Perfil </button>
                    <button className="flex items-center gap-2 p-2 mx-4"><GearIcon size={26} /> Configurações </button>
                </div>
                <div className="flex flex-col mx-4 py-4 gap-4">
                    <button className="flex items-center justify-center gap-2 mx-4 py-3 px-3 text-[16px] font-bold bg-secundary rounded-2xl text-white"> <SparkleIcon size={26} /> Versão Pro</button>
                    <button className="flex items-center gap-3 m-4"> <SignOutIcon size={26} /> Sair</button>
                </div>
            </div>
        </>
    )
}

export default SideBar