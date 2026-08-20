import { useEffect, useRef, useState } from 'react'

import { terminalPhrases } from '../data/resume'
import profile from '../assets/profile.png'
import Akoya from '../assets/Akoya.png'
import Nexa from '../assets/Nexa.png'
import Shuakt from '../assets/Shuakt.png'
import Yestime from '../assets/Yestime.png'


export default function Hero() {
  const [typed, setTyped] = useState('')

  const stateRef = useRef({
    phraseIndex: 0,
    charIndex: 0,
    deleting: false,
    timeoutId: null
  })

  /* =========================
     TERMINAL TYPING ANIMATION
  ========================== */

  useEffect(() => {
    const prefersReduced = window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches

    if (prefersReduced) {
      setTyped(terminalPhrases[0])
      return
    }

    const state = stateRef.current

    function tick() {
      const phrase = terminalPhrases[state.phraseIndex]

      if (state.deleting) {
        state.charIndex -= 1
      } else {
        state.charIndex += 1
      }

      setTyped(
        phrase.slice(
          0,
          Math.max(state.charIndex, 0)
        )
      )

      let delay = state.deleting ? 35 : 75

      if (
        !state.deleting &&
        state.charIndex === phrase.length
      ) {
        state.deleting = true
        delay = 1800
      }

      if (
        state.deleting &&
        state.charIndex === 0
      ) {
        state.deleting = false

        state.phraseIndex =
          (state.phraseIndex + 1) %
          terminalPhrases.length

        delay = 500
      }

      state.timeoutId = setTimeout(
        tick,
        delay
      )
    }

    state.timeoutId = setTimeout(
      tick,
      300
    )

    return () =>
      clearTimeout(
        state.timeoutId
      )
  }, [])

  return (
    <section
      id="top"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-bg
        text-text
        flex
        items-center
        pt-28
        pb-20
        px-5
        md:px-10
        lg:px-16
      "
    >

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Left golden glow */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-accent/10
            blur-[130px]
            animate-pulse
          "
        />

        {/* Right golden glow */}
        <div
          className="
            absolute
            top-[25%]
            -right-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-accent/8
            blur-[130px]
            animate-pulse
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* Floating dots */}
        <span
          className="
            absolute
            top-[20%]
            left-[8%]
            w-2
            h-2
            rounded-full
            bg-accent
            animate-ping
          "
        />

        <span
          className="
            absolute
            top-[30%]
            right-[10%]
            w-1.5
            h-1.5
            rounded-full
            bg-accent
            animate-pulse
          "
        />

      </div>


      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div
        className="
          relative
          z-10
          max-w-[1250px]
          w-full
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1fr_0.9fr]
          gap-14
          lg:gap-20
          items-center
        "
      >


        {/* ==================================================
            LEFT SIDE — CONTENT
        ================================================== */}

        <div
          className="
            flex
            flex-col
            justify-center
            order-2
            lg:order-1
          "
        >

          {/* Small badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              w-fit
              px-4
              py-2
              mb-7
              rounded-full
              border
              border-accent/60
              bg-accent/5
              text-accent
              font-mono
              text-[11px]
              uppercase
              tracking-[0.12em]
              shadow-[0_0_18px_rgba(212,175,55,0.08)]
              animate-[fadeUp_0.7s_ease-out]
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-accent
                shadow-[0_0_10px_rgba(212,175,55,0.8)]
                animate-pulse
              "
            />

            Full Stack Developer
          </div>


          {/* Terminal */}

          <div
            className="
              flex
              items-center
              w-fit
              mb-5
              font-mono
              text-[12px]
              md:text-[13px]
              text-text-muted
              animate-[fadeUp_0.8s_ease-out]
            "
          >
            <span className="text-accent mr-2">
              Hi! from Dev KINZ UL IMAN
            </span>

            <span>
              {typed}
            </span>

            <span
              className="
                inline-block
                w-[7px]
                h-[14px]
                bg-accent
                ml-1
                animate-blink
              "
            />
          </div>


          {/* MAIN HEADING */}

          <h1
            className="
              font-display
              font-bold
              tracking-[-0.045em]
              text-[42px]
              sm:text-[52px]
              md:text-[64px]
              lg:text-[68px]
              leading-[0.98]
              mb-7
              animate-[fadeUp_0.9s_ease-out]
            "
          >

            <span className="block">
              Building digital
            </span>

            <span
              className="
                block
                text-accent
                mt-2
              "
            >
              experiences
            </span>

            <span className="block mt-2">
              with precision
            </span>

            <span
              className="
                block
                text-text-secondary
                mt-2
              "
            >
              & care.
            </span>

          </h1>


          {/* Description */}

          <p
            className="
              max-w-[570px]
              text-[15px]
              md:text-[17px]
              leading-[1.8]
              text-text-secondary
              mb-8
              animate-[fadeUp_1s_ease-out]
            "
          >
            I'm a{' '}
            <span className="text-text font-medium">
              Full Stack (MERN)
            </span>{' '}
            and{' '}
            <span className="text-accent font-medium">
              React Native
            </span>{' '}
            developer based in Lahore, Pakistan.
            I build clean, scalable and user-focused
            web and mobile applications.
          </p>


          {/* BUTTONS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              animate-[fadeUp_1.1s_ease-out]
            "
          >

            {/* View Projects */}

            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                px-7
                py-3.5
                rounded-lg
                border
                border-accent
                bg-accent
                text-bg
                font-Archivo Black
                text-[13px]
                font-bold
                shadow-[0_0_20px_rgba(212,175,55,0.15)]
                hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
                transition-all
                duration-300
              "
            >
              View Projects

            
            </a>


            {/* GitHub Icon */}

            <a
              href="https://github.com/KinzIman22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-border-soft
                text-text
                hover:text-accent
                hover:border-accent
                hover:bg-accent/5
                hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]
                transition-all
                duration-300
              "
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>


            {/* LinkedIn Icon */}

            <a
              href="https://www.linkedin.com/in/kinzul-iman-233597342/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-border-soft
                text-text
                hover:text-accent
                hover:border-accent
                hover:bg-accent/5
                hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]
                transition-all
                duration-300
              "
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>


            {/* Gmail / Email Icon */}

            <a
              href="#contact"
              aria-label="Email"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-border-soft
                text-text
                hover:text-accent
                hover:border-accent
                hover:bg-accent/5
                hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]
                transition-all
                duration-300
              "
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.717v15.43h24v-15.43l-12 9.717z" />
              </svg>
            </a>

          </div>

        </div>


        {/* ==================================================
            RIGHT SIDE — IMAGE
        ================================================== */}

        <div
          className="
            order-1
            lg:order-2
            relative
            flex
            flex-col
            items-center
            justify-center
            pt-5
            lg:pt-0
            animate-[fadeIn_1s_ease-out]
          "
        >

          {/* Decorative golden dots */}

          <div
            className="
              absolute
              top-2
              right-[8%]
              grid
              grid-cols-4
              gap-2
              opacity-80
            "
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="
                  w-1
                  h-1
                  rounded-full
                  bg-accent
                "
              />
            ))}
          </div>


          {/* Golden glow behind image */}

          <div
            className="
              absolute
              w-[320px]
              h-[400px]
              rounded-[40px]
              bg-accent/10
              blur-[70px]
              animate-pulse
            "
          />


          {/* IMAGE */}

          <div
            className="
              group
              relative
              z-10
              w-[270px]
              h-[350px]
              sm:w-[290px]
              sm:h-[375px]
              md:w-[310px]
              md:h-[400px]
              overflow-hidden
              rounded-[28px]
              border
              border-accent/70
              bg-bg-alt
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              transition-all
              duration-500
              hover:border-accent
              hover:shadow-[0_30px_90px_rgba(212,175,55,0.18)]
            "
          >

            <img
              src={profile}
              alt="Kinzul Iman"
              className="
                w-full
                h-full
                object-cover
                object-top
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
            />

            {/* Image gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-bg/50
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

          </div>


          {/* ==================================================
              IMAGE INFO CARD
          ================================================== */}

          <div
            className="
              relative
              z-20
              -mt-8
              w-[calc(100%-30px)]
              max-w-[560px]
              px-5
              py-4
              rounded-2xl
              border
              border-border-soft
              bg-bg-alt/90
              backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.4)]
              flex
              items-center
              justify-between
              gap-5
              animate-[float_4s_ease-in-out_infinite]
            "
          >

            {/* Projects */}

            <div className="flex items-center gap-3">

              <div className="flex -space-x-2.5">
                <div className="w-8 h-8 rounded-full border-2 border-bg-alt bg-accent/30 overflow-hidden flex items-center justify-center">
                  <img src={Nexa} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-bg-alt bg-accent/40 overflow-hidden flex items-center justify-center">
                  <img src={Akoya} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-bg-alt bg-accent/50 overflow-hidden flex items-center justify-center">
                  <img src={Shuakt} alt="avatar" className="w-full h-full object-cover" />
                </div>
              </div>

              <div>

                <div className="text-accent font-semibold text-sm">
                  10+ Projects
                </div>

                <div className="text-text-muted text-[11px]">
                  Completed Successfully
                </div>

              </div>

            </div>


            {/* Divider */}

            <div className="hidden sm:block w-px h-10 bg-border-soft" />


            {/* Location */}

            <div className="hidden sm:block">

              <div className="text-accent font-semibold text-sm">
                Lahore, Pakistan
              </div>

              <div className="flex items-center gap-1.5 text-text-muted text-[11px]">

                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />

                Available for work

              </div>

            </div>

          </div>


          {/* ==================================================
              TECH STACK STRIP
          ================================================== */}

          <div
            className="
              relative
              z-10
              mt-4
              w-full
              max-w-[620px]
              px-5
              py-4
              rounded-2xl
              border
              border-border-soft
              bg-bg-alt/60
              backdrop-blur-xl
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-3
              text-[11px]
              md:text-[12px]
              text-text-secondary
            "
          >

            <span className="flex items-center gap-2">
              <span className="text-accent">✦</span>
              MERN Stack
            </span>

            <span className="hidden sm:block text-accent/50">
              |
            </span>

            <span className="flex items-center gap-2">
              <span className="text-accent">▣</span>
              React Native
            </span>

            <span className="hidden sm:block text-accent/50">
              |
            </span>

            <span className="flex items-center gap-2">
              <span className="text-accent">&lt;/&gt;</span>
              REST APIs
            </span>

            <span className="hidden sm:block text-accent/50">
              |
            </span>

            <span className="flex items-center gap-2">
              <span className="text-accent">✧</span>
              Clean Code
            </span>

          </div>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-text-muted
        "
      >

        

        

      </div>

    </section>
  )
}