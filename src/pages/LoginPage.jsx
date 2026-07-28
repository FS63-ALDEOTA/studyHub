import Logo from '../assets/Logo-Login.svg'
import Imagem from '../assets/Imagem-Login.jpg'

function LoginPage() {
  return (
    <>
      <main>
        <section>
          <div>
            <img src={Logo} alt="Logo" />
            <h1>StudyHub</h1>
          </div>
          <div>
            <h2>Aprenda no seu ritmo</h2>
            <p>
              Transforme sua jornada acadêmica com ferramentas desenhadas para o
              seu sucesso. Uma experiência focada e produtiva.
            </p>
          </div>
          <img src={Imagem} alt="Imagem" />
          <span>ACADEMIC EXCELLENCE © 2024</span>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default LoginPage;
