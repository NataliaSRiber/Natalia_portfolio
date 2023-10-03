import React from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full flex-row items-center justify-around bg-neutral-100 p-2 shadow-md">
      <div></div>
      <div className="text-center text-[10px] font-medium text-neutral-600 md:text-base">
        Site desenvolvido por Consortes Digital, 2023, todos os direitos
        reservados.
      </div>
      <div className="flex w-20 cursor-pointer items-center justify-between text-2xl font-bold md:font-semibold">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <BsInstagram className="w-3.5 text-neutral-600 hover:text-neutral-900 min-[330px]:w-5" />
        </a>
        <a
          href="https://www.whatsapp.com/?lang=pt_br"
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp className="w-3.5 text-neutral-600 hover:text-neutral-900 min-[330px]:w-5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <AiOutlineMail className="w-3.5 text-neutral-600 hover:text-neutral-900 min-[330px]:w-5" />
        </a>
      </div>
    </footer>
  )
}
