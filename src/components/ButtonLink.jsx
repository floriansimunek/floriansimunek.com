function ButtonLink({ children, to, className, ...props }) {
  return (
    <a
      href={to}
      className={`${className} block w-fit text-lg lg:text-2xl font-bold text-black bg-white py-2 px-8 border-4 border-solid border-black rounded-full`}
      {...props}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
