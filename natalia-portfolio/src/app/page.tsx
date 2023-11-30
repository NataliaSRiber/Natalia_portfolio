import Image from 'next/image'
import profilePic from '../assets/natalia/profilepicture.png'
import Homebanner from './components/HomeBanner'

export default function Home() {
  return (
    <main className="mx-6 mt-28 flex flex-col items-center justify-center pb-20 md:mt-40 lg:mx-20 lg:mt-24">
      <div className="flex w-full flex-col items-center justify-center pb-10 lg:flex-row lg:pb-20">
        <div className="items-center space-y-8 text-justify md:pl-6 lg:w-1/2 lg:flex-row lg:space-y-6">
          <p className="text-center text-2xl font-bold text-maincolor-800 md:text-left md:text-2xl">
            Olá, Bem-Vindo ao meu Portfólio!
          </p>
          <div className="space-y-6 pb-4 lg:pb-0">
            <h1 className="text-center text-lg font-semibold md:text-left md:text-4xl">
              Meu nome é Natalia,
            </h1>
            <h2 className="text-center text-2xl font-semibold text-newpink-500 md:text-left md:text-4xl">
              Sou Desenvolvedora Full Stack e UX Designer
            </h2>
          </div>
          <div>
            {/* <button>Mais informações</button> */}
            {/* <button>Mais informações</button> */}
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center lg:mb-0 lg:w-1/3">
          <Image
            priority={true}
            height={300}
            width={300}
            src={profilePic}
            alt="foto de perfil"
            className="rounded-full ring-2 ring-bluegrad-100 brightness-75"
          />
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
      <Homebanner />
    </main>
  )
}
