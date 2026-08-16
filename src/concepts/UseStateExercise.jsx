//raf ou rafce (comandos da extensão do react es7) af -> arrowfunction
//rfc ou rfce (comandos da extensão do react es7) f -> function
import { useEffect, useState } from "react"

const UseStateExercise = () => {
  //1: valor atual (current value)
  //2: funcao que altera o estado daquela constante (setNomeConst)
  //3: valor inicial 
  const [count, setCount] = useState(0)
  // const [formData, setFormData] = useState({
  //   nome: "",
  //   email: "",
  //   senha: ""
  // })
  // const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(false)
  const [mensagem, setMensagem] = useState("")

  function alterarEstados() {
    console.log("oi")
    setCount(count + 1)
    setMensagem("A contagem mudou")
    setAlert(true)
    setTimeout(()=> {
      setAlert(false)
    }, 5000)
  }

    useEffect(() => {
      console.log("fui acionado")
    }, [count])
  return (
    <div className="ml-30">
      <button onClick={alterarEstados}>{count}</button>
      {alert &&
        (<div className="fixed bottom-5 right-5 rounded-md p-5 bg-red-200">{mensagem}</div>)
      }
    </div>
  )
}
export default UseStateExercise

