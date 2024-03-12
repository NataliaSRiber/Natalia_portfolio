import Image from 'next/image'
import dancewebsite from '../../assets/developedProjects/dancegroup.png'
import drinkswebsite from '../../assets/developedProjects/drinkswebsite.png'
import portfoliowebsite from '../../assets/developedProjects/portfoliowebsite.png'
import { uxdesign } from '@/api/webdevelopmentProjects'

export default function Projects() {
  return (
    <div className="mx-6 mt-24 flex flex-col items-center justify-center gap-5 xl:mx-20 xl:mt-40">
      <h1 className="mb-6 text-center text-2xl font-bold text-maincolor-800 md:text-5xl lg:mb-10">
        Projetos desenvolvidos
      </h1>
      <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl font-bold text-gray-700 md:text-4xl xl:mb-10">
          Projetos em Desenvolvimento Web
        </h2>
        <div className="mb-8 flex w-full flex-col-reverse rounded-xl p-2 md:p-8 xl:flex-row">
          <div className="space-y-2 text-left xl:w-1/2 xl:pr-4">
            <h2 className="text-newgray-800 mb-6 mt-8 text-center text-2xl font-semibold md:text-4xl">
              Grupo de Dança Website
            </h2>
            <div className="space-y-4 text-justify xl:text-left">
              <p className="text-lg font-normal">
                O objetivo deste projeto foi criar um design de um website de um
                grupo de dança que transmitisse uma mensagem profissional e
                informações sobre a empresa. Não foi utilizada nenhuma api para
                a aplicação. O site é responsivo para atender diferentes
                tamanhos de tela.
              </p>
              <div className="flex flex-col items-start md:pb-4">
                <h4 className="text-xl font-medium  text-gray-700 md:text-xl">
                  Linguagens utilizadas:
                </h4>
                <p className="text-lg">
                  {' '}
                  Javascript, Typescript, React, NextJs, Tailwindcss
                </p>
              </div>
              <a
                href="https://github.com/NataliaSRiber/dance_group_website_template"
                target="_blank"
              >
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Repositório do projeto
                </h4>
              </a>
              <a
                href="https://dance-group-website-template.vercel.app/"
                target="_blank"
              >
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Link do Website
                </h4>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center xl:w-1/2">
            <a
              href="https://dance-group-website-template.vercel.app/"
              target="_blank"
            >
              <Image
                src={dancewebsite}
                alt="dance_website_template"
                className="cursor-pointer rounded-sm hover:scale-105"
              />
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col-reverse rounded-xl p-2 md:p-8 xl:flex-row">
          <div className="space-y-2 text-left xl:w-1/2 xl:pr-4">
            <h2 className="text-newgray-800 mb-6 mt-8 text-center text-2xl font-semibold md:text-4xl">
              Coquetéis e Bebidas website
            </h2>
            <div className="space-y-4 text-justify xl:text-left">
              <p className="text-lg font-normal">
                Este projeto é um aplicativo web com responsividade que oferece
                ao usuário a receita de diferentes drinks e cocktails. Para esta
                aplicação foi utilizada a api pública disponibilizada pelo site
                The CocktailDb, que pode ser encontrada{' '}
                <a
                  href="https://www.thecocktaildb.com/"
                  target="_blank"
                  className="font-semibold"
                >
                  aqui.
                </a>
                Buscou-se criar uma aplicação colorida e descontraída, com cores
                neons, baseado no estilo cyberpunk.
              </p>
              <div className="flex flex-col items-start md:pb-4">
                <h4 className="text-xl font-medium  text-gray-600 md:text-xl">
                  Linguagens utilizadas:
                </h4>
                <p className="text-lg">
                  {' '}
                  Javascript, Typescript, React, NextJs, Tailwindcss
                </p>
              </div>
              <a href="https://github.com/NataliaSRiber/drinks" target="_blank">
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Repositório do projeto
                </h4>
              </a>
              <a href="https://drinks-website.vercel.app/" target="_blank">
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Link do Website
                </h4>
              </a>
            </div>
          </div>
          <div className="xl:w-1/2">
            <a href="https://drinks-website.vercel.app/" target="_blank">
              <Image
                src={drinkswebsite}
                alt="dance_website_template"
                className="cursor-pointer rounded-sm hover:scale-105"
              />
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
      </div>
      <div className="flex flex-col">
        <div className="mb-8 flex w-full flex-col-reverse rounded-xl p-2 md:p-8 xl:flex-row">
          <div className="space-y-2 text-left xl:w-1/2 xl:pr-4">
            <h2 className="text-newgray-800 mb-6 mt-8 text-center text-2xl font-semibold md:text-4xl">
              Portfólio em Angular
            </h2>
            <div className="space-y-4 text-justify xl:text-left">
              <p className="text-lg font-normal">
                Meu primeiro projeto utilizando o framework Angular, onde
                comecei a desenvolver as minhas habilidades com esta nova
                ferramennta. É um portfólio simples e responsivo, contendo
                algumas informações ao meu respeito{' '}
                <a
                  href="https://www.thecocktaildb.com/"
                  target="_blank"
                  className="font-semibold"
                >
                  aqui.
                </a>
              </p>
              <div className="flex flex-col items-start md:pb-4">
                <h4 className="text-xl font-medium  text-gray-600 md:text-xl">
                  Linguagens utilizadas:
                </h4>
                <p className="text-lg">
                  {' '}
                  Javascript, Typescript, Angular, SCSS
                </p>
              </div>
              <a
                href="https://github.com/NataliaSRiber/Curso-Angular"
                target="_blank"
              >
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Repositório do projeto
                </h4>
              </a>
              <a href="https://drinks-website.vercel.app/" target="_blank">
                <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                  Link do Website
                </h4>
              </a>
            </div>
          </div>
          <div className="xl:w-1/2">
            <a href="https://drinks-website.vercel.app/" target="_blank">
              <Image
                src={portfoliowebsite}
                alt="angular_portfolio_website"
                className="cursor-pointer rounded-sm hover:scale-105"
              />
            </a>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
      </div>
      <h2 className="text-center text-2xl font-bold text-gray-700 md:text-4xl xl:mb-10">
        Projetos em UX Design
      </h2>
      {uxdesign.map(
        ({ title, description, url, mobileurl, imageCover, tools }, index) => (
          <div className="flex flex-col" key={index}>
            <div className="mb-8 flex w-full flex-col-reverse rounded-xl p-2 md:p-8 xl:flex-row">
              <div className="space-y-2 text-left xl:w-1/2 xl:pr-4">
                <h2 className="text-newgray-800 mb-6 mt-8 text-center text-2xl font-semibold md:text-4xl">
                  {title}
                </h2>
                <div className="space-y-4 text-justify xl:text-left">
                  <p className="text-lg font-normal">{description}</p>
                  <div className="flex flex-col items-start md:pb-4">
                    <h4 className="text-xl font-medium  text-gray-700 md:text-xl">
                      Ferramentas utilizadas:
                    </h4>
                    <p className="text-lg">{tools}</p>
                  </div>
                  <a href={mobileurl} target="_blank">
                    <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                      Versão Mobile
                    </h4>
                  </a>
                  <a href={url} target="_blank">
                    <h4 className="text-xl font-medium text-gray-600 underline underline-offset-4 md:pb-4 md:text-xl">
                      Versão Desktop
                    </h4>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center xl:w-1/2">
                <a href={url} target="_blank">
                  <Image
                    src={imageCover}
                    alt="dance_website_template"
                    className="cursor-pointer rounded-sm hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-newpink-200 via-newpink-100 to-newpink-200"></div>
          </div>
        ),
      )}
    </div>
  )
}
