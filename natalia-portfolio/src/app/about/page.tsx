// import Image from 'next/image'
// import logo from '../../assets/me.png'
import profilePic from '../../assets/me.png'

import Image from 'next/image'

export default function About() {
  return (
    <section className="mx-10 mb-28 mt-40 flex flex-col gap-20">
      <h3> Em construção</h3>
      {/* <div>
        <div>
          <div>
            <h1 className="mb-6 text-center text-2xl font-bold text-maincolor-800 md:text-5xl lg:mb-10">
              Sobre
            </h1>
          </div>
        </div>
        <div className="flex flex-row">
          row
          <div className="w-[40%] px-3 py-0">
            about-img
            <div className="items-center justify-center rounded-md bg-red-500">
              img-box
              <div>
                <Image
                  priority={true}
                  height={600}
                  width={400}
                  src={profilePic}
                  alt="foto de perfil"
                  className="ring-2 ring-bluegrad-100 brightness-75"
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-blue-500 px-3 py-0">
            about-text
            <p>
              Desenvolvedora Full Stack com mais de um ano de experiência, com
              conhecimentos em UX Design buscando uma recolocação no mercado de
              trabalho.
            </p>
            <h3 className="my-5 text-lg font-semibold text-maincolor-800">
              Hard Skills
            </h3>
            <div>
              Skills
              <div className="border-spacing-1 bg-pink-400">skill-item</div>
              <div>skill-item</div>
              <div>skill-item</div>
              <div>skill-item</div>
              <div>skill-item</div>
              <div>skill-item</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
