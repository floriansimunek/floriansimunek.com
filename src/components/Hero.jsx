import ButtonLink from './ButtonLink';

function Hero() {
  return (
    <Container>
      <Top>
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
      </Top>
      <Bottom></Bottom>
    </Container>
  );
}

function Container({ children, ...props }) {
  return (
    <main className="w-svw h-svh p-2" {...props}>
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

export default Hero;
