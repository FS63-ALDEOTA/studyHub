import InputSearch from "./InputSearch"
import { BellRing } from "lucide-react";
import { CircleQuestionMark } from "lucide-react"
import perfil from "../assets/perfil.jpg"
const Header = () => {
    return (
        <>
                <header className="bg-[#F9F9FFCC] flex justify-between flex-1 p-4 sticky top-0 ml-[15%]">
                    <div className="flex">
                        <h1 className="text-xl font-bold text-primary mr-24">Minhas atividades</h1>
                        <InputSearch />
                    </div>

                    <div className="flex">
                        <div className="flex gap-4 items-center">
                            <BellRing className="cursor-pointer"/>
                            <CircleQuestionMark className="cursor-pointer"/>
                            <div className="h-9 w-9 rounded-full overflow-hidden">
                                <img src={perfil} alt="" />
                            </div>
                        </div>
                    </div>
                </header>

        </>
    )
}

export default Header