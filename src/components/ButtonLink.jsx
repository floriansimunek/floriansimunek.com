function ButtonLink({ children, to, className, primary = false, ...props }) {
  return (
    <a
      href={to}
      className={`${className} ${
        primary ? 'bg-primary' : 'bg-white'
      } group flex justify-center items-center relative w-fit text-base uppercase md:text-lg lg:text-2xl font-bold text-black hover:text-primary cursor-pointer py-2 px-8 border-4 border-solid border-black rounded-full transition-all overflow-hidden`}
      {...props}
    >
      <span className="z-50 relative">{children}</span>
      <span className="bg-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-full w-full h-full scale-0 group-hover:scale-125 transition-all"></span>
    </a>
  );
}

export default ButtonLink;
