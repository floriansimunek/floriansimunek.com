import CTA from '@components/CTA';
import { ListItem } from '@components/Footer';
import { useEffect, useState, useRef } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className={`${isVisible ? 'opacity-100' : '!pointer-events-none !select-none opacity-0'} ${isOpen ? 'pointer-events-auto' : '!pointer-events-none'} fixed left-0 top-0 flex w-fit flex-col items-start justify-start overflow-hidden p-2 transition-all`}
      ref={menuRef}
      style={{ zIndex: 998 }}
    >
      <span
        className={`button group ${isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none !select-none opacity-0'} border-darkgray relative mb-2 cursor-pointer overflow-hidden rounded-full border-4 bg-white p-4 hover:text-primary lg:p-6`}
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
          className="bg-darkgray absolute left-2/4 top-2/4 h-full w-full -translate-x-2/4
        -translate-y-2/4 scale-0 rounded-full transition-all group-hover:scale-125"
        ></span>
      </span>
      <nav
        className={`menu ${isOpen ? 'opacity-100' : 'opacity-0'} border-darkgray mx-auto w-fit overflow-hidden rounded-2xl border-4 bg-white p-4 transition-all md:p-2 lg:mx-0`}
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
          <CTA className="!mt-2 !text-xl md:!text-2xl 2xl:!text-3xl" dark />
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
