import ButtonLink from './ButtonLink';
import ArrowLink from './ArrowLink';

function Section({ title, primary, id, to }) {
  return (
    <div
      className={`${primary ? 'bg-primary' : 'bg-white'}
      rounded-4xl flex min-h-svh w-full flex-col items-start justify-between p-8 lg:p-16`}
      id={id}
    >
      <Title>{title}</Title>
      <div
        className={`flex w-full items-center justify-between
        ${primary ? 'flex-row-reverse' : ''}`}
      >
        <ArrowLink to={to} />
        <div
          className={`right flex flex-col justify-center gap-2
          ${primary ? 'items-start' : 'items-end'}`}
        >
          <ButtonLink primary={primary}>Demander un devis</ButtonLink>
          <ButtonLink primary={primary}>En savoir plus</ButtonLink>
        </div>
      </div>
    </div>
  );
}

function Title({ children }) {
  return (
    <h2 className="w-full text-start text-5xl font-extrabold uppercase md:text-6xl lg:w-4/5 lg:text-7xl 2xl:w-3/5">
      {children}
    </h2>
  );
}

export default Section;
