import profilePic from '../../assets/natalia/profilepicture.png'

import Image from 'next/image'

export default function About() {
  return (
    <section className="mx-5 mb-28 mt-40 flex flex-col gap-20 lg:mx-10">
      <div className="flex flex-col items-center justify-center text-justify md:gap-20 lg:mx-10">
        <div>
          <Image
            priority={true}
            height={300}
            width={300}
            src={profilePic}
            alt="logo"
            className="rounded-full ring-4 ring-bluegrad-100 brightness-75"
          />
        </div>
        <div className="mx-5 my-3 gap-y-10">
          <h1 className="my-6 text-center text-2xl font-bold text-maincolor-800 md:text-5xl lg:mb-10">
            Natalia - Desenvolvedora Full-Stack e Designer UX
          </h1>
          <p className="text-lg font-normal">
            Bem-vindo(a) ao meu mundo, onde a paixão pela inovação se encontra
            com a habilidade técnica e o design centrado no usuário. Sou
            Natalia, uma profissional versátil com uma sólida formação em
            desenvolvimento web e design de experiência do usuário (UX).
          </p>
          <h2 className="mb-3 mt-5 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
            Experiência Profissional:
          </h2>
          <p className="text-lg font-normal">
            Ao longo de mais de um ano na Alô Bebê, mergulhei no universo
            desafiador do desenvolvimento full-stack. Trabalhei em projetos
            significativos, refinando minhas habilidades em Javascript,
            Typescript, HTML, CSS, React, Node.js, MySQL, Next.js and RTL. Essa
            experiência não apenas solidificou meu conhecimento técnico, mas
            também me ensinou a importância de criar soluções tecnológicas que
            atendam às necessidades do usuário final.
          </p>
          <h2 className="mb-3 mt-5 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
            Design Centrado no Usuário:
          </h2>
          <p className="text-lg font-normal">
            Recentemente, busquei aprimorar ainda mais minha abordagem ao
            concluir com êxito o curso de UX design do Google. Essa jornada me
            permitiu desenvolver uma compreensão profunda sobre como criar
            interfaces intuitivas e agradáveis, priorizando sempre a experiência
            do usuário. Neste curso desenvolvi projetos utilizando ferramentas
            como Adobe XD e Figma.
          </p>
          <h2 className="mb-3 mt-5 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
            Projetos Destacados:
          </h2>
          <p className="text-lg font-normal">
            Durante minha carreira, participei de projetos desafiadores que
            testaram minha criatividade e habilidades técnicas. Destaco a
            criação do menu mobile para o site e um projeto pessoal que foi a
            criação de uma aplicação com receitas de diferentes bebidas, nos
            quais pude aplicar meu conhecimento técnico e expertise em UX design
            para entregar soluções impactantes.
          </p>
          <h2 className="mb-3 mt-5 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
            Minha Abordagem:
          </h2>
          <p className="text-lg font-normal">
            Acredito em abordagens holísticas para o desenvolvimento de
            software, combinando funcionalidade robusta com uma estética
            atraente. Meu objetivo é criar experiências digitais que não apenas
            atendam, mas superem as expectativas dos usuários.
          </p>
          <h2 className="mb-3 mt-5 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
            Próximos Passos:
          </h2>
          <p className="text-lg font-normal">
            Estou constantemente em busca de desafios que me permitam expandir
            meu conhecimento e contribuir para projetos inovadores. Se você
            procura alguém apaixonado por tecnologia, orientado para resultados
            e comprometido com a excelência em UX, estou pronta para levar seu
            próximo projeto ao próximo nível. Vamos criar algo incrível juntos!
            Natalia Desenvolvedora Full-Stack | Designer UX.
          </p>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
    </section>
  )
}
