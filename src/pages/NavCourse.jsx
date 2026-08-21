// import React from 'react'
// import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import AsideCourseContent from '../components/AsideCourseContent'

export default function NavCourse() {
  return (
    <div className=''>
      <NavLink className={({isActive}) =>`mr-8 my-4 text-[14px] pb-2 ${isActive ? "text-primary border-b-2 border-primary" : ""}`} to={"/geral_curso"}>Visão Geral</NavLink>
      <NavLink className={({isActive}) =>`mr-8 my-4 text-[14px] pb-2 ${isActive ? "text-primary border-b-2 border-primary" : ""}`} to={"/conteudo"}>Conteúdo</NavLink>
      <NavLink className={({isActive}) =>`mr-8 my-4 text-[14px] pb-2 ${isActive ? "text-primary border-b-2 border-primary" : ""}`} to={"/materiais"}>Materiais</NavLink>
      <NavLink className={({isActive}) =>`mr-8 my-4 text-[14px] pb-2 ${isActive ? "text-primary border-b-2 border-primary" : ""}`} to={"/avaliacoes"}>Avaliações</NavLink>
      <Outlet/>
    </div>
  )
}
