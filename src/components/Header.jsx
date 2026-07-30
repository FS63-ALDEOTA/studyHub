import InputSearch from "./InputSeacher"
import { BellRing } from "lucide-react";
import { CircleQuestionMark } from "lucide-react"
import perfil from "./assets/perfil.jpg"

const Header = () => {
    return (
        <>

                <div className="bg-[#F9F9FFCC] flex justify-between flex-1 p-4">
                    <div className="flex ">
                        <h1 className="text-xl font-bold text-[#630ED4] mr-24">Minhas atividades</h1>
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
                </div>

        </>
    )
}

export default Header