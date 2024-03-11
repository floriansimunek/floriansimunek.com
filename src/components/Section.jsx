import ButtonLink from './ButtonLink';
import ArrowLink from './ArrowLink';

function Section({ title, primary, id, to }) {
  return (
    <div
      className={`${
        primary ? 'bg-primary' : 'bg-white'
      } w-full min-h-svh rounded-4xl p-8 lg:p-16 flex flex-col justify-between items-center`}
      id={id}
    >
      <h2 className="uppercase font-extrabold text-5xl md:text-6xl lg:text-7xl w-full text-start">
        {title}
      </h2>
      <div
        className={`bottom w-full flex justify-between items-center ${
          primary ? 'flex-row-reverse' : ''
        }`}
      >
        <ArrowLink to={to} />
        <div
          className={`right flex flex-col gap-2 justify-center ${
            primary ? 'items-start' : 'items-end'
          }`}
        >
          <ButtonLink className={`${primary ? '!bg-primary' : ''} uppercase`}>
            Demander un devis
          </ButtonLink>
          <ButtonLink className={`${primary ? '!bg-primary' : ''} uppercase`}>
            En savoir plus
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default Section;
