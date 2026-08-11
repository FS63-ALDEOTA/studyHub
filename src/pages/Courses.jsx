import { Link } from "react-router-dom"
const Courses = () => {
  return (
    <div className="ml-57.5 border-b-2 border-[#CCC3D8] pl-6 pb-6">
      <Link className="mr-8 my-4 text-[14px] focus: text-primary focus: border-b-2 pb-6.5">Visão Geral</Link>
      <Link className="mr-8 my-4 text-[14px] focus: text-primary focus: border-b-2 pb-6.5">Conteúdo</Link>
      <Link className="mr-8 my-4 text-[14px] focus: text-primary focus: border-b-2 pb-6.5">Materiais</Link>
      <Link className="my-4 text-[14px] focus: text-primary focus: border-b-2 pb-6.5">Avaliações</Link>
    </div>
  )
}

export default Courses
