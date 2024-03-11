import { HashLink } from 'react-router-hash-link';
import ArrowLink from './ArrowLink';
import CTA from './CTA';

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

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white w-full min-h-svh rounded-4xl px-4 py-8 lg:p-16 flex flex-col justify-between items-center gap-16 lg:gap-32"
    >
      <div className="w-full text-center flex flex-col gap-4">
        <h4 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold">
          un projet ? construisons le ensemble !
        </h4>
        <CTA className="w-full lg:w-2/4 md:mx-auto" dark />
      </div>
      <Menu>
        <List wide>
          <ListTitle>Navigation</ListTitle>
          <ListItem to="website-creation">Créez votre site web</ListItem>
          <ListItem to="react-app-creation">
            Créez votre application React
          </ListItem>
          <ListItem to="html-css-integration">Intégration HTML & CSS</ListItem>
          <ListItem to="upgrade-repair-optimize">
            Améliorez, réparez ou optimisez votre site
          </ListItem>
          <ListItem to="model-creation">
            Créez la maquette de votre site web
          </ListItem>
          <ListItem to="learn-to-create">
            Créez votre site web par vous-même
          </ListItem>
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
            contact@floriansimunek.com
          </ListItem>
        </List>
      </Menu>
      <div className="w-full flex justify-center items-end">
        <div className="w-full flex flex-col gap-4 lg:gap-32 lg:flex-row lg:items-end">
          <Copyright />
          <Time />
        </div>
        <ArrowLink to="hero" up />
      </div>
    </footer>
  );
}

function Menu({ children }) {
  return (
    <nav className="w-full flex flex-col justify-center items-center gap-8 lg:gap-16 lg:flex-row lg:items-start">
      {children}
    </nav>
  );
}

function List({ children, wide = false }) {
  return (
    <ul
      className={`w-full flex flex-col gap-2 md:gap-0 ${
        !wide ? 'lg:w-1/2' : 'w-full'
      }`}
    >
      {children}
    </ul>
  );
}

function ListTitle({ children }) {
  return (
    <li className="uppercase mb-2 font-bold text-2xl md:text-3xl w-full border-b-4 border-black">
      {children}
    </li>
  );
}

function ListItem({ children, to, ...props }) {
  return (
    <li>
      <HashLink
        to={props.target ? to : `/#` + to}
        className="flex justify-between items-center group relative text-lg md:text-2xl md:px-4 md:py-4 hover:md:bg-primary hover:md:font-semibold rounded-md transition-all"
        smooth
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          className={`hidden md:block md:w-8 md:h-8 stroke-black -translate-x-16 group-hover:translate-x-0 scale-0 group-hover:scale-100 transition-all`}
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
    <p className="flex flex-col text-2xl lg:text-5xl font-bold">
      &copy; 2021 - {new Date().getFullYear()}
      <span className="uppercase">Florian SIMUNEK</span>
    </p>
  );
}

function Time() {
  return (
    <p className="flex flex-col font-bold text-xl lg:text-2xl">
      LOCAL TIME <span>{getTime()} UTC+1</span>
    </p>
  );
}

export default Footer;
