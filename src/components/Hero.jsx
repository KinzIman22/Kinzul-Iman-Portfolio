import { useEffect, useRef, useState } from 'react'

import { terminalPhrases } from '../data/resume'
import useFadeIn from '../hooks/useFadeIn'
import profile from '../assets/profile.png'

const stats = [
  { value: '6th', label: 'Semester' },
  { value: '10+', label: 'Projects Built' },
  { value: '4', label: 'Certifications' }
]

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [activeStat, setActiveStat] = useState(0)

  const photoRef = useFadeIn()

  const stateRef = useRef({
    phraseIndex: 0,
    charIndex: 0,
    deleting: false,
    timeoutId: null
  })

  /* -------------------------
     Terminal Typing Animation
  ------------------------- */

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

  /* -------------------------
     Stats Animation
  ------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length)
    }, 2500)

    return () => clearInterval(interval)
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
        pb-16
        px-5
        md:px-10
        lg:px-16
      "
    >

      {/* --------------------------------
          BACKGROUND DECORATION
      -------------------------------- */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Main glow */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-accent/10
            blur-[120px]
            animate-pulse
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            top-1/3
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-accent/5
            blur-[110px]
            animate-pulse
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />

        {/* Floating dots */}
        <span className="absolute top-[18%] left-[8%] w-2 h-2 rounded-full bg-accent animate-ping" />

        <span className="absolute top-[30%] right-[12%] w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />

        <span className="absolute bottom-[20%] left-[45%] w-1.5 h-1.5 rounded-full bg-accent animate-ping" />

      </div>


      {/* --------------------------------
          MAIN CONTAINER
      -------------------------------- */}

      <div
        className="
          relative
          z-10
          max-w-[1300px]
          w-full
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          gap-16
          lg:gap-24
          items-center
        "
      >

        {/* =================================
            LEFT — PROFILE
        ================================= */}

        <div
          ref={photoRef}
          className="
            fade-in
            relative
            flex
            items-center
            justify-center
            order-1
            lg:order-1
          "
        >

          {/* Outer rotating ring */}

          <div
            className="
              absolute
              w-[320px]
              h-[320px]
              md:w-[420px]
              md:h-[420px]
              rounded-full
              border
              border-accent/20
              animate-[spin_18s_linear_infinite]
            "
          />

          {/* Second ring */}

          <div
            className="
              absolute
              w-[280px]
              h-[280px]
              md:w-[370px]
              md:h-[370px]
              rounded-full
              border
              border-border-soft
              animate-[spin_25s_linear_infinite_reverse]
            "
          />

          {/* Glow behind image */}

          <div
            className="
              absolute
              w-[270px]
              h-[270px]
              md:w-[350px]
              md:h-[350px]
              rounded-full
              bg-accent/15
              blur-[60px]
              animate-pulse
            "
          />

          {/* Decorative orbit dot */}

          <div
            className="
              absolute
              w-4
              h-4
              rounded-full
              bg-accent
              shadow-[0_0_25px_rgba(255,255,255,0.5)]
              animate-[spin_8s_linear_infinite]
              translate-x-[180px]
              md:translate-x-[220px]
            "
          />

          {/* Profile image */}

          <div
            className="
              relative
              z-10
              w-[260px]
              h-[320px]
              md:w-[330px]
              md:h-[400px]
              overflow-hidden
              rounded-t-[170px]
              rounded-b-[40px]
              border
              border-border-soft
              bg-bg-alt
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              group
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
                group-hover:scale-105
              "
            />

            {/* Image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-bg/40
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

          </div>

          {/* Floating tech badge */}

          <div
            className="
              absolute
              z-20
              -bottom-2
              left-1/2
              -translate-x-1/2
              md:left-auto
              md:right-[-20px]
              md:translate-x-0
              px-5
              py-3
              rounded-2xl
              border
              border-border-soft
              bg-bg-alt/80
              backdrop-blur-xl
              shadow-xl
              animate-[float_4s_ease-in-out_infinite]
            "
          >
            <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
              Currently building
            </div>

            <div className="text-sm font-semibold mt-1">
              React Native
            </div>
          </div>

        </div>


        {/* =================================
            RIGHT — CONTENT
        ================================= */}

        <div
          className="
            order-2
            lg:order-2
            flex
            flex-col
            justify-center
          "
        >

          {/* Small greeting */}

          <div
            className="
              flex
              items-center
              gap-3
              mb-5
              animate-[fadeUp_0.8s_ease-out]
            "
          >

            <span className="text-xl animate-bounce">
              👋
            </span>

            <span
              className="
                font-mono
                text-[13px]
                text-text-secondary
              "
            >
              Hi, I'm{' '}
              <span className="text-text font-semibold">
                Kinzul Iman
              </span>
            </span>

          </div>


          {/* Terminal */}

          <div
            className="
              inline-flex
              items-center
              w-fit
              font-mono
              text-[12px]
              md:text-[13px]
              text-text-muted
              mb-6
              px-4
              py-2
              rounded-lg
              border
              border-border-soft
              bg-bg-alt/60
              backdrop-blur-sm
            "
          >

            <span className="text-accent mr-2">
              $
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


          {/* Main heading */}

          <h1
            className="
              font-display
              font-bold
              tracking-[-0.04em]
              text-[42px]
              sm:text-[52px]
              md:text-[68px]
              lg:text-[72px]
              leading-[0.95]
              mb-7
              animate-[fadeUp_0.9s_ease-out]
            "
          >

            <span className="block">
              FULL STACK
            </span>

            <span
              className="
                block
                font-serif
                italic
                font-normal
                text-text-secondary
                text-[38px]
                sm:text-[48px]
                md:text-[60px]
                lg:text-[64px]
                mt-2
              "
            >
              & MOBILE DEVELOPER
            </span>

          </h1>


          {/* Accent line */}

          <div className="flex items-center gap-3 mb-7">

            <div
              className="
                h-[2px]
                w-16
                bg-accent
                animate-[expand_1s_ease-out]
              "
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
              MERN · React Native
            </span>

          </div>


          {/* Description */}

          <p
            className="
              text-[15px]
              md:text-[17px]
              text-text-secondary
              max-w-[590px]
              leading-[1.8]
              mb-9
              animate-[fadeUp_1.1s_ease-out]
            "
          >
            I build{' '}
            <span className="text-text font-medium">
              scalable web and mobile experiences
            </span>{' '}
            using modern technologies, thoughtful architecture,
            and clean user-focused interfaces.
          </p>


          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              mb-12
            "
          >

            <a
              href="#projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                font-mono
                text-[13px]
                px-7
                py-3.5
                rounded-lg
                bg-accent
                text-bg
                font-semibold
                shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]
                transition-all
                duration-300
              "
            >
              View Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>


            <a
              href="#contact"
              className="
                inline-flex
                items-center
                font-mono
                text-[13px]
                px-7
                py-3.5
                rounded-lg
                border
                border-border-soft
                text-text
                hover:border-accent
                hover:text-accent
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Let's Talk
            </a>

          </div>


          {/* Stats */}

          <div
            className="
              grid
              grid-cols-3
              gap-4
              max-w-[560px]
              pt-7
              border-t
              border-border-soft
            "
          >

            {stats.map((stat, index) => (

              <div
                key={stat.label}
                className={`
                  group
                  relative
                  transition-all
                  duration-500
                  ${
                    activeStat === index
                      ? 'translate-y-[-3px]'
                      : ''
                  }
                `}
              >

                <div
                  className="
                    font-display
                    font-bold
                    text-2xl
                    md:text-3xl
                    text-text
                    mb-1
                    transition-colors
                    duration-300
                    group-hover:text-accent
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    font-mono
                    text-[10px]
                    md:text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-text-muted
                  "
                >
                  {stat.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* Scroll indicator */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-text-muted
          animate-bounce
        "
      >

        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="w-px h-8 bg-border-soft" />

      </div>

    </section>
  )
}