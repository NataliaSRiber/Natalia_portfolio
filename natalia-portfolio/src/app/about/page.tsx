import Image from 'next/image'
import logo from '../../assets/me.png'

export default function Home() {
  return (
    <main className="mx-10 mb-28 mt-40 flex flex-col gap-20">
      <div className="mx-10 flex items-start justify-start gap-20 text-justify">
        <Image
          priority={true}
          height={400}
          width={400}
          src={logo}
          alt="logo"
          className="rounded-full ring-4 ring-bluegrad-100"
        />
        <div className="max-w-4xl">
          <h1 className="mb-6 text-center text-2xl font-bold text-maincolor-800 md:text-5xl lg:mb-10">
            Natalia
          </h1>
          <p className="text-lg font-normal">
            Desenvolvedora Full Stack com mais de um ano de experiência,
            apaixonada por UX Design buscando uma recolocação no mercado de
            trabalho. Sou uma pessoa criativa e que gosta de trabalhar com
            pessoas. Sempre busco aprender coisas novas e me inovar.
          </p>
        </div>
      </div>

      <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
    </main>
  )
}
