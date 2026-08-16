import { useEffect, useState } from "react"

//useEffect - Hook - funcionalidade do react pra otimizar algum serviço
//Efeito colateral - como se fosse em cascata (advindo de outra execução)
// 3 estruturas: 
//    sem dependência,
//    com dependência vazia,
//    e com dependência preenchida.

const UseEffectExercise = () => {
  const [novoAluno, setNovoAluno] = useState("")
  const [alunos, setAlunos] = useState([
    "Raul", "William", "Domingos", "Carlos", "Rafael"
  ])

 //sem dependência - start: ao montar componente e sempre que houver alteração no componente
  // useEffect(() => {
  //   console.log("fui acionado")
  // })
  
  // //com dependência vazia - start: na primeira montagem do componente.
  // useEffect(() => {
  //   //bloco de codigo
  // }, [])
  
  // //com dependência preenchida - start: na primeira montagem e quando o estado da dependencia muda
  // useEffect(() => {
  //   //chamo a requisição que carrega a tabela 
  // }, [tableData])

  function addAluno () {
    setAlunos(
      [...alunos, novoAluno]
    )
  }
  useEffect(() => {
    console.log(alunos)
  }, [alunos])

  return (
    <div>
      <input type="text" value={novoAluno} placeholder="Digite o nome do aluno" name="novoAluno" onChange={(e)=> setNovoAluno(e.target.value)}/>
      <button onClick={addAluno}>Adicionar Aluno</button>

      <ul>{alunos.map((aluno, index)=> (
        <li key={index}>{aluno}</li>
        ))}</ul>
    </div>
  )
}

export default UseEffectExercise
