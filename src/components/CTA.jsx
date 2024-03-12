function CTA({ className, dark = false }) {
  return (
    <a
      href="https://floriansimunek.trafft.com/"
      target="_blank"
      rel="noreferrer"
      className={`group relative ${className} flex items-center justify-between gap-2 overflow-hidden rounded-2xl bg-primary px-8 py-12 text-2xl font-extrabold uppercase text-black transition-all md:text-4xl lg:justify-around 2xl:text-5xl`}
    >
      <span
        className={`z-50 flex flex-col text-start lg:flex-row ${
          dark ? 'group-hover:text-primary' : 'group-hover:text-black'
        }`}
      >
        Prendre&nbsp;<span>rendrez-vous</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        className={`h-12 w-12 stroke-black group-hover:translate-x-4 md:h-16 md:w-16 ${
          dark ? 'group-hover:stroke-primary' : 'group-hover:stroke-black'
        } z-50 transition-all`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
      <span
        className={`${
          dark ? 'bg-black' : 'bg-white'
        } absolute left-0 right-0 top-2/4 h-0 -translate-y-2/4 transition-all group-hover:h-full`}
      ></span>
    </a>
  );
}

export default CTA;
