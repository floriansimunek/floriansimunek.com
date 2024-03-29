function ButtonLink({
  children,
  to,
  className = '',
  primary = false,
  onClick,
  ...props
}) {
  return (
    <a
      href={to}
      className={`${className} ${primary ? 'bg-primary' : 'bg-white'}
      border-darkgray text-darkgray group relative flex w-fit cursor-pointer
      items-center justify-center overflow-hidden rounded-full border-4 border-solid
      px-8 py-2 text-base font-bold uppercase transition-all hover:text-primary md:text-lg lg:text-2xl`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-50">{children}</span>
      <span
        className="bg-darkgray absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4
        -translate-y-2/4 scale-0 rounded-full transition-all group-hover:scale-125"
      ></span>
    </a>
  );
}

export function Button({
  children,
  className = '',
  primary = false,
  onClick,
  ...props
}) {
  return (
    <span
      className={`${className} ${primary ? 'bg-primary' : 'bg-white'}
      border-darkgray text-darkgray group relative flex w-fit cursor-pointer
      items-center justify-center overflow-hidden rounded-full border-4 border-solid
      px-8 py-2 text-base font-bold uppercase transition-all hover:text-primary md:text-lg lg:text-2xl`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-50">{children}</span>
      <span
        className="bg-darkgray absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4
        -translate-y-2/4 scale-0 rounded-full transition-all group-hover:scale-125"
      ></span>
    </span>
  );
}

export default ButtonLink;
