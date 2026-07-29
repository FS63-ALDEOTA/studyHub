import Logo from '../assets/Logo-Login.svg'
import Imagem from '../assets/Imagem-Login.jpg'

function LoginPage() {
  return (
    <>
      <main className="flex h-screen">
        <section className="flex-1 flex flex-col bg-[#7C3AED] p-10 gap-8 justify-between">
          <div className="flex gap-4 items-center text-[#EDE0FF]">
            <img
              className="bg-[#EDE0FF] rounded-md p-2"
              src={Logo}
              alt="Logo"
            />
            <h1 className="text-base">StudyHub</h1>
          </div>

          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="text-xl text-[#FFFF]">Aprenda no seu ritmo</h2>
            <p className="text-[#EDE0FFCC] ">
              Transforme sua jornada acadêmica com ferramentas desenhadas para o
              seu sucesso. Uma experiência focada e produtiva.
            </p>
          </div>

          <div>
            <img src={Imagem} alt="Imagem" />
          </div>

          <div className="text-[#EDE0FF99] text-sm">
            <span>ACADEMIC EXCELLENCE © 2024</span>
          </div>
        </section>
        <section className="flex-1 bg-[#F9F9FF]"></section>
      </main>
    </>
  );
}

export default LoginPage;
