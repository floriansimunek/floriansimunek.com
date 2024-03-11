import ButtonLink from './ButtonLink';

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
        <a href={'#' + to} className="left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-12 h-12 rotate-90 lg:w-16 lg:h-16 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
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
