import { HouseIcon, GraduationCapIcon, CalendarDotsIcon, NotePencilIcon, UserIcon, GearIcon, HeartIcon, SparkleIcon, SignOutIcon } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";


function SideBar() {
    return (
        <>
            <aside className="flex absolute top-0 h-screen w-[15%] flex-col justify-between border-r border-[#CCC3D8]">
                <div className="mx-4 py-4">


      <Logo variant="filled" color="roxo" size="md">
        <Logo.Text />
      </Logo>
                    <h3 className="mx-4 font-semibold text-[14px]">Excelência Acadêmica</h3>
                </div>
                <div className="flex flex-1 flex-col gap-2 mx-2 overflow-hidden">
                    <Link to={"/home"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><HouseIcon size={26} /> Início</Link>
                    <Link to={"/meus-cursos"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><GraduationCapIcon size={26} /> Meus Cursos</Link>
                    <Link to={"/atividades"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><NotePencilIcon size={26} /> Atividades </Link>
                    <Link to={"/calendario"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"> <CalendarDotsIcon size={26} /> Calendário</Link>
                    <Link to={"/favoritos"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><HeartIcon size={26} /> Favoritos </Link>
                    <Link to={"/perfil"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><UserIcon size={26} /> Perfil </Link>
                    <Link to={"/configuracoes"} className="flex items-center gap-2 p-2 mx-4 focus:text-[#5A00C6] focus:bg-[#EADDFF] focus:rounded-xl focus:border-l-3"><GearIcon size={26} /> Configurações </Link>
                </div>
                <div className="flex flex-col mx-4 py-4 gap-4">
                    <button className="flex items-center justify-center gap-2 mx-4 py-3 px-3 text-[16px] font-bold bg-secondary rounded-2xl text-white"> <SparkleIcon size={26} /> Versão Pro</button>
                    <button className="flex items-center gap-3 m-4"> <SignOutIcon size={26} /> Sair</button>
                </div>
            </aside>
        </>
    )
}

export default SideBar