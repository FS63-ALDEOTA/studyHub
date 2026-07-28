import { HouseIcon , GraduationCapIcon, CalendarDotsIcon, NotePencilIcon, UserIcon, GearIcon, HeartIcon, SparkleIcon, SignOutIcon } from "@phosphor-icons/react";

function SideBar() {
    return (
        <>
        <div className="h-screen w-[20%]">
            <div className="mx-4 mb-4">
                <h1 className="px-4 font-bold text-primary text-[20px]">StudyHub</h1>
                <h3 className="mx-4 font-semibold text-[14px]">Excelência Acadêmica</h3>
            </div>
            <div>
                <div className="flex items-center"><HouseIcon size={32} /> Início</div>
                <div className="flex items-center"><GraduationCapIcon size={32} /> Meus Cursos</div>
                <div className="flex items-center"><NotePencilIcon size={32} /> Atividades </div>
                <div className="flex items-center"> <CalendarDotsIcon size={32} /> Calendário</div>
                <div className="flex items-center"><HeartIcon size={32} /> Favoritos </div>
                <div className="flex items-center"><UserIcon size={32} /> Perfil </div>
                <div className="flex items-center"><GearIcon size={32} /> Configurações </div>
            </div>
            <div>
                <div className="flex items-center"> <SparkleIcon size={32} /> Upgrade para Pro</div>
                <div className="flex items-center"> <SignOutIcon size={32} /> Sair</div>
            </div>
        </div>
        </>
    )
}

export default SideBar