import { HashLink } from 'react-router-hash-link';

function ArrowLink({ to = ' ', up = false, className = '', ...props }) {
  return (
    <HashLink
      to={'#' + to}
      className={`${className}
      group relative block h-16 w-16 animate-bounce cursor-pointer overflow-hidden rounded-full lg:h-20 lg:w-20`}
      smooth
      {...props}
    >
      <Arrow up={up} />
      <span
        className="pointer-events-none invisible select-none opacity-0"
        aria-hidden
      >
        {to && to}
        {props.onClick && 'button'}
      </span>
      <span className="absolute bottom-0 left-0 right-0 top-0 scale-0 rounded-full bg-black transition-all group-hover:scale-100"></span>
    </HashLink>
  );
}

export function ArrowButton({ up = false, className = '', ...props }) {
  return (
    <span
      className={`${className}
      group relative block h-16 w-16 animate-bounce cursor-pointer overflow-hidden rounded-full lg:h-20 lg:w-20`}
      {...props}
    >
      <Arrow up={up} />
      <span className="absolute bottom-0 left-0 right-0 top-0 scale-0 rounded-full bg-black transition-all group-hover:scale-100"></span>
    </span>
  );
}

export function Arrow({ up, block = false, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      className={`h-3/4 w-3/4
      ${up ? '-rotate-90' : 'rotate-90'}
      ${className}
      ${block ? '!relative !left-0 !top-0 !h-6 !w-6 !-translate-x-0 !-translate-y-0 lg:!h-10 lg:!w-10' : ''}
      absolute left-2/4 top-2/4 z-50 -translate-x-2/4 -translate-y-2/4 stroke-black transition-all group-hover:stroke-primary`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export default ArrowLink;
