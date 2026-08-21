// import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
// import AsideCourseContent from '../components/AsideCourseContent'

export default function NavCourse() {
    const [selected, setSelected] = useState(true)
    const [notSelected, setnotSelected] = useState(true)

  return (
    <div className=''>
    
    <Link className={`${selected && "text-primary border-b-2"}mr-8 my-4 text-[14px] pb-2`} to={"/geral_curso"}>Visão Geral</Link>
    <Link className={`${selected && "text-primary border-b-2"}mr-8 my-4 text-[14px] pb-2`} to={"/conteudo"}>Conteúdo</Link>
    <Link className={`${selected && "text-primary border-b-2"}mr-8 my-4 text-[14px] pb-2`} to={"/materiais"}>Materiais</Link>
    <Link className={`${selected && "text-primary border-b-2"}my-4 text-[14px] pb-2`} to={"/avaliacoes"}>Avaliações</Link>
    <Outlet/>
    </div>
  )
}
