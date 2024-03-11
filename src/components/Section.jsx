import { HashLink } from 'react-router-hash-link';
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
        <HashLink
          to={'#' + to}
          className="left group relative rounded-full cursor-pointer overflow-hidden w-16 h-16 lg:w-20 lg:h-20"
          smooth
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            className="w-3/4 h-3/4 rotate-90 stroke-black group-hover:stroke-primary transition-all top-2/4 left-2/4 absolute z-50 -translate-y-2/4 -translate-x-2/4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <span className="bg-black rounded-full absolute top-0 left-0 bottom-0 right-0 scale-0 group-hover:scale-100 transition-all"></span>
        </HashLink>
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
