function Container({ children, primary, id, className }) {
  return (
    <div
      className={`${primary ? 'bg-primary' : 'bg-white'}
      ${className}
      rounded-4xl flex min-h-svh w-full flex-col items-start justify-between p-8 lg:p-16`}
      id={id}
    >
      {children}
    </div>
  );
}

export default Container;
