import React from 'react'
import ScrollReveal from '../ReactBits/ScrollReveal'

const About = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16 w-full">
    <div className="max-w-5xl mx-auto text-center">
      {/* Highlighted Heading with Sparkle Icon */}
      <div className="flex flex-col items-center mb-5">
        <span className="flex items-center gap-2 text-green-500 text-sm font-medium tracking-widest mb-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="inline-block">
            <path d="M10 2L12 7H17L13 11L15 16L10 13L5 16L7 11L3 7H8L10 2Z" fill="currentColor"/>
          </svg>
          ABOUT ME
        </span>
      </div>
      {/* Main Text */}
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
’m Vikash Singh Rajput — a Motion Designer & Graphic Designer.
I help brands grow with creative and attractive visuals.
I create designs, animations, and brand identities that people remember.
</ScrollReveal>
    </div>

  </section>




    </div>
  )
}

export default About
