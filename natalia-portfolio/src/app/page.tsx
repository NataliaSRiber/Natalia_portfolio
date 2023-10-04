import Image from 'next/image'
import profilePic from '../assets/natalia/profilepicture.png'
import Homebanner from './components/HomeBanner'

export default function Home() {
  return (
    <main className="mx-6	mt-24 flex flex-col items-center justify-center pb-20 lg:mx-20 lg:mt-40">
      <div className="flex w-full flex-col items-center justify-center pb-20 lg:flex-row">
        <div className="items-center space-y-16 text-justify md:pl-6 lg:w-1/2 lg:flex-row">
          <p className="text-4xl font-bold text-maincolor-800">
            Olá, Bem-Vindo ao meu Portfólio!
          </p>
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Meu nome é Natalia,</h1>
            <h2 className="text-4xl font-bold text-newpink-500">
              Sou Desenvolvedora Full Stack
            </h2>
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
