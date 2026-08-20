import { useState } from 'react'

import Logo from '../assets/Logo.png'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] bg-bg/90 backdrop-blur-xl border-b border-border-soft shadow-[0_4px_30px_rgba(0,0,0,0.15)]">

      <div className="max-w-[1080px] mx-auto px-8 h-[68px] flex items-center justify-between relative">

        {/* =========================
            LOGO
        ========================== */}

        <a
          href="#top"
          className="group relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <img
            src={Logo}
            alt="Kinzul Iman"
            className="
              relative
              z-10
              w-16
              h-16
              rounded-full
              object-cover
              border-2
              border-accent/40
              shadow-[0_0_18px_rgba(212,175,55,0.15)]
              transition-all
              duration-500
              group-hover:border-accent
              group-hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]
              group-hover:scale-105
              group-hover:rotate-2
            "
          />
        </a>


        {/* =========================
            NAVIGATION LINKS
        ========================== */}

       <div
  className={`
    ${
      open
        ? 'flex flex-col absolute top-[68px] inset-x-0 bg-bg/95 backdrop-blur-xl border-b border-border-soft px-5 py-6 gap-4 animate-[slideDown_0.3s_ease-out]'
        : 'hidden'
    }

    md:flex
    md:static
    md:flex-row
    md:border-none
    md:bg-transparent
    md:p-0
    md:gap-3
    text-sm
  `}
>
  {links.map((link) => (
    <a
      key={link.href}
      href={link.href}
      onClick={() => setOpen(false)}
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        rounded-md
        border
        border-accent/50
        text-white
        bg-accent/5
        hover:bg-accent
        hover:text-bg
        hover:border-accent
        hover:shadow-[0_0_22px_rgba(212,175,55,0.35)]
        transition-all
        duration-300
      "
    >
      {link.label}
    </a>
  ))}
</div>

        {/* =========================
            RESUME BUTTON
        ========================== */}

        <a
          href="/resume.pdf"
          download
          className="
            hidden
            md:inline-flex
            items-center
            justify-center
            font-mono
            text-[13px]
            px-5
            py-2.5
            rounded-md
            border
            border-accent
            text-accent
            bg-accent/5
            shadow-[0_0_12px_rgba(212,175,55,0.12)]

            hover:bg-accent
            hover:text-bg
            hover:border-accent
            hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]

            transition-all
            duration-300
          "
        >
          Resume

          <span className="ml-2">
            ↓
          </span>
        </a>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          className="
            md:hidden
            relative
            w-10
            h-10
            flex
            flex-col
            items-center
            justify-center
            gap-[5px]
            rounded-lg
            border
            border-border-soft
            hover:border-accent
            transition-all
            duration-300
          "
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >

          <span
            className={`
              w-[22px]
              h-[2px]
              rounded-full
              bg-white
              transition-all
              duration-300
              ${open ? 'rotate-45 translate-y-[7px] bg-accent' : ''}
            `}
          />

          <span
            className={`
              w-[22px]
              h-[2px]
              rounded-full
              bg-white
              transition-all
              duration-300
              ${open ? 'opacity-0' : ''}
            `}
          />

          <span
            className={`
              w-[22px]
              h-[2px]
              rounded-full
              bg-white
              transition-all
              duration-300
              ${open ? '-rotate-45 -translate-y-[7px] bg-accent' : ''}
            `}
          />

        </button>

      </div>
    </nav>
  )
}