import profilePicture from '@assets/pp.webp';
import ButtonLink from './ButtonLink';
import CTA from './CTA';

function Hero() {
  return (
    <Container className="flex flex-col gap-2 lg:gap-4" id="hero">
      <Top className="flex flex-col gap-2 md:flex-row lg:h-3/4 lg:gap-4">
        <div className="flex h-fit w-full flex-col items-start justify-between gap-64 rounded-2xl bg-primary p-4 text-black sm:gap-32 lg:h-full lg:w-4/6 lg:p-8 xl:gap-0">
          <h1 className="text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            Prêt à faire de votre vision une réalité ?
          </h1>
          <div className="flex w-full flex-col gap-2 lg:gap-4 xl:flex-row">
            <Top>
              <ButtonLink
                className="!w-full text-center normal-case"
                to="mailto:contact@floriansimunek.com"
                target="_blank"
                rel="noreferrer"
              >
                contact@floriansimunek.com
              </ButtonLink>
            </Top>
            <Bottom className="flex gap-2 lg:gap-4">
              <ButtonLink
                className="w-full text-center normal-case xl:w-fit"
                to="https://www.linkedin.com/in/simunek-florian/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink
                className="w-full text-center normal-case xl:w-fit"
                to="https://bento.me/florian-simunek"
                target="_blank"
                rel="noreferrer"
              >
                Bento
              </ButtonLink>
            </Bottom>
          </div>
        </div>
        <div className="relative min-h-96 w-full overflow-hidden rounded-2xl bg-white sm:min-h-0 lg:w-2/6">
          <img
            src={profilePicture}
            alt="Photo de profil"
            className="absolute bottom-0 left-0 right-0 z-50"
          />
          <div className="flex h-full w-full flex-col items-center justify-between py-4">
            <TextBanner />
            <TextBanner />
            <TextBanner />
            <TextBanner />
            <TextBanner />
            <TextBanner />
            <TextBanner />
            <TextBanner />
          </div>
        </div>
      </Top>
      <Bottom className="flex flex-col gap-2 lg:h-1/4 lg:gap-4 xl:flex-row">
        <div className="stats flex gap-2 lg:w-full lg:gap-4">
          <Stat>
            +140
            <span className="text-xl font-bold md:text-2xl 2xl:text-3xl">
              commandes
            </span>
          </Stat>
          <Stat>
            100%
            <span className="text-xl font-bold md:text-2xl 2xl:text-3xl">
              avis positifs
            </span>
          </Stat>
          <Stat className="hidden lg:flex">
            100%
            <span className="text-xl font-bold md:text-2xl 2xl:text-3xl">
              complétion
            </span>
          </Stat>
        </div>
        <CTA className="lg:w-full" />
      </Bottom>
    </Container>
  );
}

function Container({ children, className = '', ...props }) {
  return (
    <main
      className={`${className} h-fit w-full p-2 lg:p-4 xl:h-svh`}
      {...props}
    >
      {children}
    </main>
  );
}

function Top({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Bottom({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function TextBanner() {
  return (
    <div
      className="text-wrapper max-w-full overflow-hidden text-5xl font-extrabold"
      aria-hidden
    >
      <div
        className="text-banner inline-block overflow-hidden whitespace-nowrap"
        aria-hidden
      >
        <h3 className={`inline-block uppercase text-black`} aria-hidden>
          Florian SIMUNEK
        </h3>
        &nbsp;
        <h3 className={`inline-block uppercase text-black`} aria-hidden>
          Florian SIMUNEK
        </h3>
        &nbsp;
        <h3 className={`inline-block uppercase text-black`} aria-hidden>
          Florian SIMUNEK
        </h3>
        &nbsp;
        <h3 className={`inline-block uppercase text-black`} aria-hidden>
          Florian SIMUNEK
        </h3>
      </div>
    </div>
  );
}

function Stat({ className = '', children }) {
  return (
    <h2
      className={`${className} flex min-h-32 w-full flex-col items-center justify-center rounded-2xl bg-white text-2xl font-extrabold uppercase text-black md:text-4xl 2xl:text-5xl`}
    >
      {children}
    </h2>
  );
}

export default Hero;
