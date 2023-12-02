export default function Contact() {
  return (
    <div className="mx-10 mb-28 mt-40 flex flex-col gap-10">
      <h1 className="mb-6 text-center text-2xl font-bold text-maincolor-800 md:text-5xl lg:mb-10">
        Contato
      </h1>
      <div>
        <h2 className=" mb-3 text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
          Email
        </h2>
        <p>nataliasribeiro15@gmail.com</p>
      </div>
      <div>
        <h2 className="text-center text-lg font-semibold text-newpink-500 md:text-left md:text-xl">
          <a
            href="https://www.linkedin.com/in/natalia-de-souza-ribeiro/"
            target="_blank"
          >
            Linkedin
          </a>
        </h2>
      </div>
    </div>
  )
}
