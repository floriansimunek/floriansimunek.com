import { HashLink } from 'react-router-hash-link';

function ArrowLink({ to, up = false }) {
  return (
    <HashLink
      to={'#' + to}
      className="group block relative rounded-full cursor-pointer overflow-hidden w-16 h-16 lg:w-20 lg:h-20"
      smooth
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        className={`w-3/4 h-3/4 ${
          up ? '-rotate-90' : 'rotate-90'
        } stroke-black group-hover:stroke-primary transition-all absolute top-2/4 left-2/4 z-50 -translate-y-2/4 -translate-x-2/4`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
      <span className="bg-black rounded-full absolute top-0 left-0 bottom-0 right-0 scale-0 group-hover:scale-100 transition-all"></span>
    </HashLink>
  );
}

export default ArrowLink;
