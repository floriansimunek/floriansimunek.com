import profilePicture from '@assets/pp.webp';
import ButtonLink from './ButtonLink';
import CTA from './CTA';

function Hero() {
  return (
    <Container className="flex flex-col gap-2 lg:gap-4">
      <Top className="flex flex-col gap-2 lg:gap-4 md:flex-row lg:h-3/4">
        <div className="bg-primary text-black p-4 lg:p-8 rounded-2xl w-full h-fit flex flex-col justify-between items-start gap-64 lg:w-4/6 lg:h-full">
          <h1 className="text-6xl lg:text-7xl font-extrabold uppercase">
            Prêt à faire de votre vision une réalité ?
          </h1>
          <div className="flex flex-col gap-2 lg:gap-4 w-full lg:flex-row">
            <Top>
              <ButtonLink
                className="!w-full text-center"
                to="mailto:contact@floriansimunek.com"
                target="_blank"
                rel="noreferrer"
              >
                contact@floriansimunek.com
              </ButtonLink>
            </Top>
            <Bottom className="flex gap-2 lg:gap-4">
              <ButtonLink
                className="!w-full text-center"
                to="https://www.linkedin.com/in/simunek-florian/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink
                className="!w-full text-center"
                to="https://bento.me/florian-simunek"
                target="_blank"
                rel="noreferrer"
              >
                Bento
              </ButtonLink>
            </Bottom>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden relative w-full min-h-96 lg:w-2/6">
          <img
            src={profilePicture}
            alt="Photo de profil"
            className="absolute bottom-0 left-0 right-0 z-50"
          />
          <div className="w-full h-full flex flex-col justify-between items-center py-4">
            <TextBanner />
            <TextBanner bordered />
            <TextBanner />
            <TextBanner bordered />
            <TextBanner />
            <TextBanner bordered />
            <TextBanner />
            <TextBanner bordered />
          </div>
        </div>
      </Top>
      <Bottom className="flex flex-col gap-2 lg:gap-4 lg:flex-row lg:h-1/4">
        <div className="stats flex gap-2 lg:gap-4 lg:w-full">
          <Stat>
            +140
            <span className="font-bold text-xl md:text-2xl 2xl:text-3xl">
              commandes
            </span>
          </Stat>
          <Stat>
            100%
            <span className="font-bold text-xl md:text-2xl 2xl:text-3xl">
              avis positifs
            </span>
          </Stat>
          <Stat className="hidden lg:flex">
            100%
            <span className="font-bold text-xl md:text-2xl 2xl:text-3xl">
              complétion
            </span>
          </Stat>
        </div>
        <CTA className="lg:w-full" />
      </Bottom>
    </Container>
  );
}

function Container({ children, className, ...props }) {
  return (
    <main
      className={`${className} w-full h-fit lg:h-svh p-2 lg:p-4`}
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

function TextBanner({ bordered }) {
  return (
    <div className="text-wrapper text-5xl font-extrabold max-w-full overflow-hidden">
      <div className="text-banner overflow-hidden inline-block whitespace-nowrap">
        <p
          className={`uppercase inline-block ${bordered ? 'text-primary' : ''}`}
        >
          Florian SIMUNEK
        </p>
        &nbsp;
        <p
          className={`uppercase inline-block ${bordered ? 'text-primary' : ''}`}
        >
          Florian SIMUNEK
        </p>
        &nbsp;
        <p
          className={`uppercase inline-block ${bordered ? 'text-primary' : ''}`}
        >
          Florian SIMUNEK
        </p>
        &nbsp;
        <p
          className={`uppercase inline-block ${bordered ? 'text-primary' : ''}`}
        >
          Florian SIMUNEK
        </p>
      </div>
    </div>
  );
}

function Stat({ className, children }) {
  return (
    <h3
      className={`${className} bg-white text-black rounded-2xl w-full min-h-32 flex flex-col justify-center items-center uppercase font-extrabold text-2xl md:text-4xl 2xl:text-5xl`}
    >
      {children}
    </h3>
  );
}

export default Hero;
