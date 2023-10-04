import { presentations } from '@/api/webdevelopmentProjects'
import Image from 'next/image'
import React from 'react'

export default function Homebanner() {
  return (
    <section className="mx-10 flex w-full flex-col items-center text-gray-600 md:h-full">
      <div className="container mx-auto pb-8 pt-32"></div>
      <div className="container mx-auto w-full pb-16">
        <div className="pb-10 text-center md:pb-20">
          <h1 className="px-2 text-2xl font-semibold text-gray-700 md:text-5xl">
            Projetos de Desenvolvimento
          </h1>
        </div>
        <div className="flex flex-wrap justify-center ">
          {presentations.map(
            ({ title, description, date, videoUrl }, index) => (
              // <div key={index} className="p-4 md:w-1/2 xl:w-1/3">
              <div key={index} className="p-4 md:w-1/2">
                <div className="h-full overflow-hidden rounded-lg border-2 border-newpink-500 border-opacity-60">
                  <Image
                    className="h-full cursor-pointer hover:brightness-50"
                    src={videoUrl}
                    alt="dance-picture"
                    width={800}
                    height={800}
                  />
                  {/* <div className="h-full cursor-pointer p-6 transition duration-300 ease-in hover:bg-newpink-500 hover:text-gray-100">
                    <h2 className="mb-1 text-sm font-medium text-blue-300 md:text-base">
                      {date}
                    </h2>
                    <h1 className="mb-3 text-xl font-semibold md:text-2xl">
                      {title}
                    </h1>
                    <p className="mb-3 leading-relaxed">{description}</p>
                  </div> */}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
