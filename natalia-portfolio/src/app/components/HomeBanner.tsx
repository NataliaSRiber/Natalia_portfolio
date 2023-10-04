import { presentations } from '@/api/webdevelopmentProjects'
import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

export default function Homebanner() {
  return (
    <section className="text-maincolor-800md:h-full mx-10 flex w-full flex-col items-center">
      <div className="container mx-auto pb-2 pt-20"></div>
      <div className="container mx-auto w-full pb-16">
        <div className="pb-10 text-center">
          <h1 className="px-2 text-xl font-semibold text-maincolor-800 md:text-3xl">
            Projetos de Desenvolvimento Web
          </h1>
        </div>
        <div className="flex flex-wrap justify-center ">
          {presentations.map(
            ({ title, description, date, videoUrl, url }, index) => (
              // <div key={index} className="p-4 md:w-1/2 xl:w-1/3">
              <div key={index} className="my-4 md:my-0 md:w-1/2">
                <a href={url} target="_blank">
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
                </a>
              </div>
            ),
          )}
        </div>
      </div>
      {/* <div className="container mx-auto w-full pb-16">
        <div className="pb-10 text-center">
          <h1 className="px-2 text-xl font-semibold text-gray-700 md:text-5xl">
            Projetos de UX Design
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
                  <div className="h-full cursor-pointer p-6 transition duration-300 ease-in hover:bg-newpink-500 hover:text-gray-100">
                    <h2 className="mb-1 text-sm font-medium text-blue-300 md:text-base">
                      {date}
                    </h2>
                    <h1 className="mb-3 text-xl font-semibold md:text-2xl">
                      {title}
                    </h1>
                    <p className="mb-3 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div> */}
    </section>
  )
}
