


import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//1 - crio o contexto e atribuo a uma constante
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

//2 - decidir quais são as variaveis/estados/funções que queremos globalizar, chamando-as dentro de uma função Provedora
export const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario")
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null
  })
  const navigate = useNavigate()

  function login(email, senha) {
    fetch("http://localhost:3000/usuarios")
      .then(res => res.json())
      .then(dados => {
        console.log(dados)
        const user = dados.find((user) => {
          return user.email == email && user.senha == senha
        })
        if (!user) {
          alert("Email ou senha incorretos!")
          return
        }
        setUsuario(localStorage.setItem("usuario", JSON.stringify({email: user.email, id: user.id})))
        return true
      })
      .catch((error) => {
        console.error("Erro na requisição", error)
        return false
      })
  }

  function logout () {
    setUsuario("")
    localStorage.removeItem("usuario")
    navigate("/")
  }
  return (
    //3 - Chamada do Provedor para os filhos 
    <AuthContext.Provider value={{login, logout, usuario, setUsuario}}>
      {children}
    </AuthContext.Provider>
  )
}