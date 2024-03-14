import { HashLink } from 'react-router-hash-link';
import ArrowLink from './ArrowLink';
import CTA from './CTA';
import services from '@/services';

function getTime() {
  const date = new Date();
  const paris = new Date(
    date.toLocaleString('en-US', { timeZone: 'Europe/Paris' }),
  );
  const hours =
    paris.getHours() <= 9 ? '0' + paris.getHours() : paris.getHours();
  const minutes =
    paris.getMinutes() <= 9 ? '0' + paris.getMinutes() : paris.getMinutes();
  return hours + ':' + minutes;
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function Footer() {
  return (
    <footer
      id="footer"
      className="rounded-4xl flex min-h-svh w-full flex-col items-center justify-between gap-16 bg-white px-4 py-8 lg:gap-32 lg:p-16"
    >
      <div className="flex w-full flex-col text-center">
        <h4 className="text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
          un projet ? construisons le ensemble !
        </h4>
        <h3 className="mt-2 text-3xl font-extrabold uppercase md:text-6xl lg:text-8xl">
          Entrons en contact
        </h3>
        <CTA className="mt-8 w-full md:mx-auto xl:w-2/4" dark />
      </div>
      <Menu>
        <List wide>
          <ListTitle>Navigation</ListTitle>
          {Object.keys(services).map((key) => {
            const service = services[key];

            return (
              <ListItem key={key} to={service.id}>
                {service.title}
              </ListItem>
            );
          })}
          <ListItem to="reviews">Avis clients</ListItem>
        </List>
        <List>
          <ListTitle>Réseaux</ListTitle>
          <ListItem
            to="https://www.linkedin.com/in/simunek-florian/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </ListItem>
          <ListItem
            to="https://github.com/floriansimunek"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ListItem>
          <ListItem
            to="https://comeup.com/fr/@florian-s"
            target="_blank"
            rel="noreferrer"
          >
            ComeUp
          </ListItem>
          <ListItem
            to="https://www.malt.fr/profile/floriansimunek"
            target="_blank"
            rel="noreferrer"
          >
            Malt
          </ListItem>
          <ListItem
            to="https://www.codeur.com/-florian_s"
            target="_blank"
            rel="noreferrer"
          >
            Codeur
          </ListItem>
        </List>
        <List>
          <ListTitle>Liens utiles</ListTitle>
          <ListItem
            to="https://bento.me/florian-simunek"
            target="_blank"
            rel="noreferrer"
          >
            Bento
          </ListItem>
          <ListItem
            to="mailto:contact@floriansimunek.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </ListItem>
        </List>
      </Menu>
      <div className="flex w-full items-end justify-center">
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:gap-32">
          <Copyright />
          <Time />
        </div>
        <ArrowLink onClick={scrollTop} up />
      </div>
    </footer>
  );
}

function Menu({ children }) {
  return (
    <nav className="flex w-full flex-col items-center justify-center gap-8 lg:items-start xl:flex-row xl:gap-16">
      {children}
    </nav>
  );
}

function List({ children, wide = false }) {
  return (
    <ul className={`flex w-full flex-col ${!wide ? 'xl:w-1/2' : 'w-full'}`}>
      {children}
    </ul>
  );
}

function ListTitle({ children }) {
  return (
    <li className="mb-2 w-full border-b-4 border-black text-2xl font-bold uppercase md:text-3xl">
      {children}
    </li>
  );
}

export function ListItem({ children, to, className, onClick, ...props }) {
  return (
    <li>
      <HashLink
        to={props.target ? to : `/#` + to}
        className={`${className} group relative flex items-center justify-between rounded-md py-2 text-lg transition-all md:px-4 md:py-4 md:text-2xl hover:md:bg-primary hover:md:font-semibold`}
        smooth
        onClick={onClick}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className={`${props.target ? '-rotate-45' : ''} hidden -translate-x-16 scale-0 stroke-black transition-all group-hover:translate-x-0 group-hover:scale-100 md:block md:h-8 md:w-8`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </HashLink>
    </li>
  );
}

function Copyright() {
  return (
    <p className="flex flex-col text-2xl font-bold lg:text-5xl">
      &copy; 2021 - {new Date().getFullYear()}
      <span className="uppercase">Florian SIMUNEK</span>
    </p>
  );
}

function Time() {
  return (
    <p className="flex flex-col text-xl font-bold lg:text-2xl">
      LOCAL TIME <span>{getTime()} UTC+1</span>
    </p>
  );
}

export default Footer;
