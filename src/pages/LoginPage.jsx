import Logo from "../assets/Logo-Login.svg";
import Imagem from "../assets/Imagem-Login.jpg";
import iconeEmail from "../assets/icone-email.svg";
import iconeSenha from "../assets/icone-senha.svg";

function LoginPage() {
  return (
    <>
      <main className="flex h-screen">
        <section className="hidden md:flex flex-1 flex-col bg-[#7C3AED] p-10 gap-8">
          <div className="flex gap-4 items-center text-[#EDE0FF] mt-1">
            <img
              className="bg-[#EDE0FF] border rounded-md p-2"
              src={Logo}
              alt="Logo"
            />
            <h1 className="text-base">StudyHub</h1>
          </div>

          <div className="flex flex-col gap-4 max-w-md mt-10">
            <h2 className="text-xl text-[#FFFF]">Aprenda no seu ritmo</h2>
            <p className="text-[#EDE0FFCC]">
              Transforme sua jornada acadêmica com ferramentas desenhadas para o
              seu sucesso. Uma experiência focada e produtiva.
            </p>
          </div>

          <div className="w-[80%] p-5 border border-white/10 rounded-lg">
            <img className="w-full" src={Imagem} alt="Imagem" />
          </div>

          <div className="mt-auto text-[#EDE0FF99] text-sm">
            <span>ACADEMIC EXCELLENCE © 2024</span>
          </div>
        </section>

        <section className="flex-1 flex items-center bg-[#F9F9FF] justify-center">
          <div className="w-full max-w-sm flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2>Entrar na sua conta</h2>
              <p>Bem-vindo de volta! Por favor, insira suas dados.</p>
            </div>

            <form className="flex flex-col gap-4 mt-4">
              <div>
                <label htmlFor="emailLogin">E-mail</label>
                <div className="flex items-center gap-2 border border-[#d9d9db] rounded-xl px-3">
                  <img src={iconeEmail} alt="Ícone de E-mail" />
                  <input
                    className="w-full p-2 outline-none"
                    id="emailLogin"
                    type="email"
                    placeholder="nome@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="senhaLogin">Senha</label>
                <div className="flex items-center gap-2 border border-[#d9d9db] rounded-xl px-3">
                  <img src={iconeSenha} alt="Ícone de Senha" />
                  <input
                    className="w-full p-2 outline-none"
                    id="senhaLogin"
                    type="password"
                    placeholder="****"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-2">
                <div className="flex gap-2">
                  <input id="lembrar" type="checkbox" />
                  <label htmlFor="lembrar">Lembrar de mim</label>
                </div>

                <a className="text-[#630ED4] hover:underline" href="#">
                  Esqueci minha senha
                </a>
              </div>

              <button
                className="bg-[#630ED4] text-[#F9F9FF] hover:bg-[#510CB0] py-3 px-4 rounded-xl"
                type="submit"
              >
                Entrar
              </button>
            </form>

            <p className="text-center mt-4">
              Não tem uma conta?
              <a className="text-[#630ED4] hover:underline" href="#">
                Criar conta
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginPage;
