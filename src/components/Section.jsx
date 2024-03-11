import ArrowLink from './ArrowLink';
import ButtonLink from './ButtonLink';
import Container from './Container';

function Section({ title, primary, id, to }) {
  return (
    <Container primary={primary} id={id}>
      <Title>{title}</Title>
      <div
        className={`flex w-full items-center justify-between
        ${primary ? 'flex-row-reverse' : ''}`}
      >
        <ArrowLink to={to} />
        <div
          className={`right flex flex-col justify-center gap-2
          ${primary ? 'items-start' : 'items-end'}`}
        >
          <ButtonLink primary={primary}>Demander un devis</ButtonLink>
          <ButtonLink primary={primary}>En savoir plus</ButtonLink>
        </div>
      </div>
    </Container>
  );
}

function Title({ children }) {
  return (
    <h2 className="w-full text-start text-5xl font-extrabold uppercase md:text-6xl lg:w-4/5 lg:text-7xl 2xl:w-3/5">
      {children}
    </h2>
  );
}

export default Section;
