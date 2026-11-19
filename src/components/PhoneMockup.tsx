type Props = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

/** Premium phone frame. The screenshot is shown undistorted at its native 390×844 ratio. */
export default function PhoneMockup({ src, alt, className = '', eager }: Props) {
  return (
    <div
      className={`relative rounded-[2.6rem] p-[8px] bg-gradient-to-b from-[#4a5382] via-[#1a2147] to-[#0b1230] shadow-[0_40px_80px_-30px_rgba(11,18,48,.65),0_18px_36px_-18px_rgba(11,18,48,.5)] ${className}`}
    >
      {/* side buttons */}
      <span aria-hidden className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[#2b3358]" />
      <span aria-hidden className="absolute -left-[3px] top-36 h-14 w-[3px] rounded-l bg-[#2b3358]" />
      <span aria-hidden className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-r bg-[#2b3358]" />
      <div className="relative overflow-hidden rounded-[2.1rem] bg-navy-900 ring-1 ring-black/40">
        <img
          src={src}
          alt={alt}
          width={390}
          height={844}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          className="block w-full h-auto"
        />
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[2.1rem] bg-gradient-to-tr from-white/0 via-white/[.04] to-white/[.09]" />
      </div>
    </div>
  )
}
