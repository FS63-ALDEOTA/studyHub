import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="flex items-center">
      <Link className="">Visão Geral</Link>
      <Link className="">Materiais</Link>
      <Link className="">Conteúdo</Link>
      <Link className="">Avaliações</Link>
    </div>
  )
}

export default Home
