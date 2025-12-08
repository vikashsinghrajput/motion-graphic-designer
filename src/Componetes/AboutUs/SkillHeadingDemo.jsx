export default function SkillHeadingDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <SkillHeading
          title="Skills"
          subtitle="Tools & technologies I use"
          kicker="What I work with"
        />

        {/* Example content below the heading */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["React","Tailwind CSS","TypeScript","Node.js","Express","MongoDB"].map((s)=> (
            <span key={s} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm hover:bg-white/10 transition">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * SkillHeading — a reusable, stylish section heading for skill sections
 * Props:
 *  - kicker?: small label text above the title
 *  - title: main heading
 *  - subtitle?: supporting line under the title
 */
function SkillHeading({ kicker, title = "Skills", subtitle }) {
  return (
    <header className="relative isolate">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -inset-x-6 -top-16 -z-10 flex justify-center">
        <div className="h-32 w-[42rem] bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-emerald-400/20 blur-3xl" />
      </div>

      {/* Kicker */}
      {kicker && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase text-white/80">
          <Sparkles className="h-3.5 w-3.5" />
          {kicker}
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Underline accent */}
      <div className="mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400" />

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-white/70 max-w-prose">
          {subtitle}
        </p>
      )}
    </header>
  );
}

function Sparkles(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <path d="M12 3.5l1.6 3.7 3.7 1.6-3.7 1.6L12 14.1l-1.6-3.7-3.7-1.6 3.7-1.6L12 3.5z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 17l.9 2 .9.9-2-.9L4 17l2 .0z" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M18.5 16l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8z" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}
