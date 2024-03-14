import { ListItem } from '@components/Footer';
import { useState, useEffect } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight / 4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} fixed left-0 top-0 flex w-full flex-col items-start justify-start overflow-hidden p-2 transition-all`}
      style={{ zIndex: 998 }}
    >
      <span
        className="button group pointer-events-auto relative mb-2 cursor-pointer overflow-hidden rounded-full border-4 border-black bg-white p-4 hover:text-primary lg:p-6"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="pointer-events-none relative z-50 h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <span
          className="absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4 -translate-y-2/4
        scale-0 rounded-full bg-black transition-all group-hover:scale-125"
        ></span>
      </span>
      <nav
        className={`menu ${isOpen ? 'w-11/12 border-4 border-black p-4 lg:w-6/12 lg:p-8 2xl:w-4/12' : 'w-0'} mx-auto overflow-hidden rounded-2xl bg-white transition-all lg:mx-0`}
      >
        <ul>
          <ListItem
            to="hero"
            className="font-bold uppercase hover:md:font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </ListItem>
          <ListItem
            to="website-creation"
            className="font-bold uppercase hover:md:font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            Services
          </ListItem>
          <ListItem
            to="reviews"
            className="font-bold uppercase hover:md:font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            Avis clients
          </ListItem>
          <ListItem
            to="footer"
            className="font-bold uppercase hover:md:font-extrabold"
            onClick={() => setIsOpen(false)}
          >
            Liens
          </ListItem>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
