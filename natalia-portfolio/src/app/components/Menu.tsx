'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '../lib/routes'

export default function Menu() {
  const currentRoute = usePathname()

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [open])

  function setUnderlineOnCurrentPage(link: string) {
    if (link === currentRoute) {
      return 'before:w-full before:opacity-100'
    }
    return 'before:w-0 before:opacity-0'
  }

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-7 cursor-pointer text-3xl md:hidden"
      >
        {open && <AiOutlineClose className="text-newpink-500" />}
        {!open && <GiHamburgerMenu className="text-newpink-500" />}
      </div>
      <ul
        className={`fixed left-0 z-[-1] w-full bg-neutral-100 pb-12 pl-9 transition-all duration-[1000ms] ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
          open ? 'top-20 h-full' : 'top-[-100%] h-full'
        }`}
      >
        {routes.map(({ name, route }, index) => (
          <li key={index} className="text-l my-7 font-bold md:my-0 md:ml-8">
            <Link
              href={route}
              className={`${setUnderlineOnCurrentPage(
                route,
              )} relative inline-block text-maincolor-800 before:absolute before:left-1/2 before:top-7 before:h-1 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-bluegrad-100 before:via-newpink-200 before:to-newpink-200 before:opacity-0 before:transition-all before:duration-700 before:content-['']`}
              // )} relative inline-block before:absolute before:left-1/2 before:top-7 before:h-1 before:w-0 before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-r before:from-gray-600 before:via-slate-400 before:to-zinc-500 before:opacity-0 before:transition-all before:duration-700 before:content-[''] hover:before:w-full hover:before:opacity-100 `}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
