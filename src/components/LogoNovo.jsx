
const LogoNovo = ({img, color}) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {img && <img className={`${color == "primary" ? "bg-primary " : "bg-[#EDE0FF]"} rounded-lg px-2 py-2.5`} src={img} alt="img-logo"/>}
      {color == "primary" ? <h1 className="font-semibold text-primary text-xl">StudyHub</h1> : <h1 className="font-light text-[#EDE0FF] text-xl">StudyHub</h1>}
    </div>
  )
}

export default LogoNovo
