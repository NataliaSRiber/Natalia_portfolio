import Image from 'next/image'
import logo from '../assets/me.png'

export default function Home() {
  return (
    <main className="mx-6	mt-24 flex flex-col-reverse items-center justify-center lg:mx-20 lg:mt-40 lg:flex-row">
      <div className="items-center space-y-6 pl-10 text-justify md:pl-6 lg:w-1/2">
        <p className="text-xl font-medium">Olá, Eu sou</p>
        <h1 className="text-2xl font-bold">Natalia</h1>
        <h2 className="text-2xl font-bold text-newpink-500">
          Desenvolvedora Full Stack
        </h2>
      </div>
      <div className="mb-6 flex items-center justify-center lg:mb-0 lg:w-1/2">
        <Image
          priority={true}
          height={400}
          width={400}
          src={logo}
          alt="logo"
          className="rounded-full ring-4 ring-bluegrad-100"
        />
      </div>
    </main>
  )
}
