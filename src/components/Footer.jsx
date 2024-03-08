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
    <footer className="bg-white w-full min-h-svh rounded-4xl p-8 flex flex-col justify-between items-center gap-16">
      <div className="top text-center flex flex-col gap-4">
        <h4 className="uppercase text-2xl font-bold">
          un projet ? construisons le ensemble !
        </h4>
        <CTA />
      </div>
      <div className="middle w-full">
        <nav className="w-full flex flex-col justify-center items-center gap-8">
          <ul className="w-full flex flex-col gap-2">
            <li className="uppercase mb-2 font-bold text-2xl w-full border-b-4 border-black">
              Navigation
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
          </ul>

          <ul className="w-full flex flex-col gap-2">
            <li className="uppercase mb-2 font-bold text-2xl w-full border-b-4 border-black">
              Réseaux
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
          </ul>
          <ul className="w-full flex flex-col gap-2">
            <li className="uppercase mb-2 font-bold text-2xl w-full border-b-4 border-black">
              Liens utiles
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
            <li>
              <a href="" className="text-lg">
                Lien 1
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom w-full flex gap-2 justify-center items-end">
        <div className="left w-full flex flex-col gap-4">
          <p className="flex flex-col text-3xl font-bold">
            &copy; {new Date().getFullYear()}
            <span className="uppercase">Florian SIMUNEK</span>
          </p>
          <p className="flex flex-col font-bold text-2xl">
            LOCAL TIME <span>{getTime()} UTC+1</span>
          </p>
        </div>
        <div className="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="#FFF"
            className="w-16 h-16 -rotate-90 bg-black rounded-full p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
