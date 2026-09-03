// import {useEffect, useState } from "react"

const Activities = () => {
//   const [atividades, setAtividades] = useState([])
//   const [novaAtividade, setNovaAtividade] = useState("")


//   function buscarAtividades () {
//     fetch("http://localhost:3000/atividades")
//       .then(res => res.json())
//       .then(dados => setAtividades(dados))
//       .catch(error => console.error(error))
//   }
  
// useEffect(()=> {
//   buscarAtividades()
// })




//   function handleAddAtividade () {
//     const payload = {nome: novaAtividade}

//     fetch("http://localhost:3000/atividades", {
//       method: "POST",  //CREATE
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload)
//     })
//       .then(res => res.json())
//       .then(dados => {
//         console.log(dados)
//         setNovaAtividade("")
//         buscarAtividades()
//       }
//     )
//       .catch(error => console.error(error))
//   }
  
  
  return (
    <div>
      <h1>Atividades</h1>
      {/* <h1 className="font-bold p-2">Atividades</h1>
      <ul>
        {atividades.map((item)=> (
            <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
      <div className="bg-purple-400 h-screen">
      <input className="border p-2 mr-2" type="text" value={novaAtividade} onChange={(e) => setNovaAtividade(e.target.value)} name="nome"/>
      <button onClick={handleAddAtividade}>Criar atividade</button>
      </div> */}
    </div>
  )
}

export default Activities
