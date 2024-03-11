function Container({ children, primary, id }) {
  return (
    <div
      className={`${primary ? 'bg-primary' : 'bg-white'}
      rounded-4xl flex min-h-svh w-full flex-col items-start justify-between p-8 lg:p-16`}
      id={id}
    >
      {children}
    </div>
  );
}

export default Container;
