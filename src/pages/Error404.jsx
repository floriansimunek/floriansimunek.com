import Container from '@components/Container';
import ArrowLink from '@components/ArrowLink';
import ButtonLink from '@components/ButtonLink';

function Error404() {
  return (
    <Container className="" primary>
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-8 md:gap-0">
        <h2 className="text-9xl font-extrabold">404</h2>
        <h3 className="text-center text-2xl md:mt-8 md:text-5xl">
          La page que vous cherchez n&apos;existe pas
        </h3>
        <ButtonLink to="/" className="md:mt-16">
          Retourner à l&apos;accueil
        </ButtonLink>
      </div>
      <div className="flex w-full items-center justify-end">
        <ArrowLink to={'footer'} />
      </div>
    </Container>
  );
}

export default Error404;
