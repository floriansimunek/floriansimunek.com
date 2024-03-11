function CTA({ className, dark = false }) {
  return (
    <a
      href="https://floriansimunek.trafft.com/"
      target="_blank"
      rel="noreferrer"
      className={`group relative ${className} text-black text-2xl md:text-4xl 2xl:text-5xl uppercase font-extrabold bg-primary rounded-2xl flex justify-between lg:justify-around items-center gap-2 px-8 py-12 transition-all overflow-hidden`}
    >
      <span
        className={`flex flex-col text-start lg:flex-row z-50 ${
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
        className={`w-12 h-12 md:w-16 md:h-16 group-hover:translate-x-4 stroke-black ${
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
        } absolute top-2/4 left-0 right-0 -translate-y-2/4  h-0 group-hover:h-full transition-all`}
      ></span>
    </a>
  );
}

export default CTA;
