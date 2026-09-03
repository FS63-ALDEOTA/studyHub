import { useEffect, useState } from "react"
import SummaryCards from "../components/SummaryCards"
import {
  BookOpenCheck,
  BadgeCheck,
  FilePlay,
  Clock
} from "lucide-react"

const Home = () => {
  const [qtdMatricula, setQtdMatricula] = useState(0)
  const [qtdCompletos, setQtdCompletos] = useState(0)
  const [qtdAulasConcluidas, setQtdAulasConcluidas] = useState(0)
  const [HorasAssistidas, setHorasAssistidas] = useState(0)


  useEffect(() => {
    fetch("http://localhost:3000/matriculas?usuarioId=1")
      .then(res => res.json())
      .then(dados => {
        setQtdMatricula(dados.filter((matricula) => {
          return matricula.status === "ativo"
        }).length)

      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/matriculas?usuarioId=1")
      .then(res => res.json())
      .then(dados => {
        setQtdCompletos(dados.filter((concluido) => {
          return concluido.status === "concluido"
        }).length)

      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/progresso?usuarioId=1&concluido=true")
      .then(res => res.json())
      .then(dados => {
        setQtdAulasConcluidas(dados.filter((concluido) => {
          return concluido.aulaId

        }).length)
      })
  }, [])

  useEffect(() => {

    fetch("http://localhost:3000/progresso?usuarioId=1&concluido=true")
      .then(res => res.json())
      .then(progresso => {

        console.log("PROGRESSO:", progresso)


        fetch("http://localhost:3000/aulas")
          .then(res => res.json())
          .then(aulas => {

            const totalMinutos = progresso.reduce((total, item) => {

              const aulaEncontrada = aulas.find((aula) => {
                return aula.id == item.aulaId;
              });

              console.log("ITEM:", item);
              console.log("AULA ENCONTRADA:", aulaEncontrada);
              return total + aulaEncontrada.duracaoMinutos;

            }, 0);

            const totalHoras = `${(totalMinutos / 60).toFixed(1)}`;

            setHorasAssistidas(totalHoras);

          });

      });

  }, []);

  const infos = [
    {
      title: "CURSOS ATIVOS",
      subtitle: qtdMatricula,
      icon: BookOpenCheck,
      colorBgIcon: "#EADDFF80",
      colorIcon: "#630ED4"
    },
    {
      title: "COMPLETOS",
      subtitle: qtdCompletos,
      icon: BadgeCheck,
      colorBgIcon: "#DCFCE7",
      colorIcon: "#16A34A"
    },
    {
      title: "AULAS ASSISTIDAS",
      subtitle: qtdAulasConcluidas,
      icon: FilePlay,
      colorBgIcon: "#FFEDD5",
      colorIcon: "#EA580C"
    },
    {
      title: "TOTAL HORAS",
      subtitle: HorasAssistidas,
      icon: Clock,
      colorBgIcon: "#DBEAFE",
      colorIcon: "#2563EB"
    }
  ]

  return (
    <div>
      <h1>Página inicial</h1>

      <div className="flex gap-4">
        {infos.map((info) => (
          <SummaryCards
            key={info.title}
            title={info.title}
            subtitle={info.subtitle}
            icon={info.icon}
            colorBgIcon={info.colorBgIcon}
            colorIcon={info.colorIcon}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
