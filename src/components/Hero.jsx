import ButtonLink from './ButtonLink';
import profilePicture from '@assets/pp.webp';

function Hero() {
  return (
    <Container className="flex flex-col gap-2">
      <Top className="flex flex-col gap-2">
        <div className="bg-primary text-black p-4 rounded-2xl w-full h-fit flex flex-col justify-between items-start gap-36">
          <h1 className="text-4xl font-extrabold uppercase">
            Prêt à faire de votre vision une réalité ?
          </h1>
          <div className="flex flex-col gap-2 w-full">
            <Top>
              <ButtonLink
                className="!w-full text-center"
                to="mailto:contact@floriansimunek.com"
                target="_blank"
              >
                contact@floriansimunek.com
              </ButtonLink>
            </Top>
            <Bottom className="flex gap-2">
              <ButtonLink
                className="!w-full text-center"
                to="https://www.linkedin.com/in/simunek-florian/"
                target="_blank"
              >
                LinkedIn
              </ButtonLink>
              <ButtonLink
                className="!w-full text-center"
                to="https://bento.me/florian-simunek"
                target="_blank"
              >
                Bento
              </ButtonLink>
            </Bottom>
          </div>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden relative w-full min-h-96">
          <img
            src={profilePicture}
            alt="Photo de profil"
            className="absolute bottom-0 left-0 right-0 z-50"
          />
          <div className="w-full h-full flex flex-col py-4">
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
      <Bottom className="flex flex-col gap-2"></Bottom>
    </Container>
  );
}

function Container({ children, className, ...props }) {
  return (
    <main className={`${className} w-svw h-fit p-2`} {...props}>
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

export default Hero;
