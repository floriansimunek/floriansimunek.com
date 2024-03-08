function CTA({ className }) {
  return (
    <a
      href="https://floriansimunek.trafft.com/"
      target="_blank"
      rel="noreferrer"
      className={`${className} text-black text-2xl md:text-4xl uppercase font-extrabold bg-primary rounded-2xl flex justify-between items-center gap-2 px-8 py-12`}
    >
      <span className="flex flex-col text-start">
        Prendre <span>rendrez-vous</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-12 h-12 md:w-16 md:h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  );
}

export default CTA;
