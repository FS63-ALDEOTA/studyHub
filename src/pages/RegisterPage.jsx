import Logo from '../assets/Logo-Register.png';
import Image from '../assets/Img-Register.jpg';
import Gradient from '../assets/Gradient.png';
import Senha from '../assets/Confirmarsenha.png';
import { UserIcon, EnvelopeIcon, LockIcon} from "@phosphor-icons/react";

function RegisterPage(){
    return(
        <>
        <main className='flex flex-row w-full'>
            <section className='bg-[#E7EEFF] p-8 w-full'>
                <div className='items-center flex flex-row mb-12'>
                    <img src={Logo} alt="" className='bg-primary p-2 rounded-xl'/>
                    <h1 className='font-semibold text-primary ml-2'>StudyHub</h1> 
                </div>
                <span className='font-bold text-5xl leading-15 mb-4'>Inicie sua <p>jornada de</p> <p className='text-primary'>excelência.</p></span>
                <span className='text-[#4A4455] text-[18px]'><p>A StudyHub combina o rigor acadêmico com</p> <p>a praticidade moderna para potencializar</p> <p>seu aprendizado diário.</p></span>
                <div className='relative mb-37.75'>
                    <img src={Image} alt="" className='mt-41.75 rounded-2xl border-[#FFFFFF66] border'/>
                    <img src={Gradient} alt="" className='absolute top-0 w-lg rounded-2xl'/>
                    <div className='flex flex-col absolute bottom-4 left-4'>
                        <span className='text-white text-[12px]'>PLATAFORMA ACADÊMICA</span>
                        <span className='text-white text-[16px] mt-2'>"O foco é a chave para o progresso acadêmico real."</span>
                    </div>
                </div>
                <span className='text-[12px] text-[#7B7487]'>© 2024 StudyHub Academic Clarity. Todos os direitos reservados.</span>
            </section>
            <section className='px-40 bg-[#F9F9FF] w-full flex justify-center items-baseline flex-col'>
                <h1 className='text-3xl font-bold mb-2 flex items-baseline'>Crie sua conta</h1>
                <span className='text-[16px] text-[#4A4455]'>Junte-se a milhares de estudantes de alto desempenho.</span>
                <div className='mt-8'>
                    <h1 className='text-[#4A4455] text-[14px] mb-2'>Nome completo</h1>
                    <div className='flex flex-row h-12.25 w-md bg-white border border-[#CCC3D8] rounded-xl'>
                        <UserIcon size={16} color="#7b7487" className='mr-2 mt-4 ml-4'/>
                        <input type="name" placeholder='Ex.: Ana Silva' className='w-full rounded-xl focus:border-0 focus:outline-0'/>
                    </div>
                </div>
                <div className='my-6'>
                    <h1 className='text-[#4A4455] text-[14px] mb-2'>E-mail institucional ou pessoal</h1>
                    <div className='flex flex-row h-12.25 w-md bg-white border border-[#CCC3D8] rounded-xl'>
                        <EnvelopeIcon size={16} color="#7b7487" className='mr-2 mt-[16.1px] ml-4'/>
                        <input type="email" placeholder='nome@exemplo.edu' className='w-full rounded-xl focus:border-0 focus:outline-0'/>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='mr-4'>
                        <h1 className='text-[#4a4455] text-[14px] mb-2'>Senha</h1>
                        <div className='flex flex-row bg-white border border-[#CCC3D8] rounded-xl h-12.25 w-54'>
                            <LockIcon size={16} color="#7b7487" className='mr-2 mt-[16.1px] ml-4'/>
                            <input type="password" placeholder='••••••••' className='w-full rounded-xl focus:border-0 focus:outline-0'/>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#4a4455] text-[14px] mb-2'>Confirmar senha</h1>
                        <div className='flex flex-row bg-white border border-[#CCC3D8] rounded-xl h-12.25 w-54'>
                            <img src={Senha} alt="" className='w-5 h-5 mr-2 ml-4 mt-3.5'/>
                            <input type="password" placeholder='••••••••' className='w-full rounded-xl focus:border-0 focus:outline-0'/>
                        </div>
                    </div>
                </div>
                <button className='text-white bg-primary mt-6 w-md h-15 text-[20px] font-semibold rounded-xl shadow-xl'>Criar conta</button>
                <p className='px-31 mt-10 text-[16px]'>Já possui uma conta?<span className='text-primary ml-1'>Entrar</span></p>
            </section>
        </main>
        </>
    )
}
export default RegisterPage