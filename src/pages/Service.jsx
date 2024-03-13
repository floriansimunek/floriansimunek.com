import services from '@/services';
import { Arrow } from '@components/ArrowLink';
import CTA from '@components/CTA';
import Container from '@components/Container';
import { Title } from '@components/Section';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Service() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);

  useEffect(() => {
    const servicesArray = Object.values(services);
    const foundService = servicesArray.find((service) => service.slug === slug);

    if (!foundService) {
      navigate('/notfound', { replace: true });
    }

    setService(foundService);
  }, [slug, navigate]);

  return (
    service && (
      <Container className="!justify-start gap-24 md:gap-32" primary>
        <Title>{service.title}</Title>
        <Description>
          <h1 className="text-xl font-extrabold uppercase lg:text-2xl 2xl:text-3xl">
            {service.description.title}
          </h1>
          <h2 className="text-lg lg:text-xl 2xl:text-2xl">
            {service.description.subtitle}
          </h2>
          <h3 className="text-lg uppercase lg:text-xl 2xl:text-2xl">
            {service.description.question}
          </h3>
          <ul className="flex flex-col items-start justify-start gap-1 lg:gap-2">
            {Object.keys(service.description.bulletpoint).map((key) => (
              <li className="text-lg italic lg:text-xl 2xl:text-2xl" key={key}>
                {service.description.bulletpoint[key]}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold lg:text-xl 2xl:text-2xl">
            {service.description.final}
          </p>
        </Description>
        <Wrapper>
          <SectionTitle>{service.benefits.title}</SectionTitle>
          <InnerContainer>
            {Object.keys(service.benefits)
              .filter((_, index) => index !== 0)
              .map((key) => (
                <Dropdown key={key} title={key} text={service.benefits[key]} />
              ))}
          </InnerContainer>
        </Wrapper>
        <Wrapper>
          <SectionTitle>FAQ</SectionTitle>
          <InnerContainer>
            {Object.keys(service.faq).map((key) => (
              <FAQ key={key} question={key} answer={service.faq[key]} />
            ))}
          </InnerContainer>
        </Wrapper>
        <Wrapper>
          <SectionTitle>Discutons de votre projet de vive-voix</SectionTitle>
          <CTA
            className="mt-4 w-full lg:mt-8 lg:!justify-center lg:gap-16 lg:py-20"
            dark
            white
          />
        </Wrapper>
      </Container>
    )
  );
}

function Description({ children }) {
  return (
    <div className="flex w-full select-none flex-col items-start justify-center gap-4 rounded-lg bg-white px-6 py-4 transition-all lg:mx-auto lg:w-3/4 lg:gap-8 xl:px-12 xl:py-8">
      {children}
    </div>
  );
}

function Dropdown({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full cursor-pointer select-none rounded-lg bg-white px-6 py-4 transition-all lg:mx-auto lg:w-3/4 xl:px-12 xl:py-8"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <span className="flex items-center justify-between">
        <h4 className="text-lg font-bold uppercase transition-all md:text-2xl xl:text-3xl">
          {title}
        </h4>
        <Arrow block up={isOpen} />
      </span>
      <p
        className={`${isOpen ? 'mt-4 h-fit xl:mt-8' : 'h-0'} w-full overflow-hidden text-justify text-base transition-all md:text-lg lg:w-3/4 lg:text-start xl:text-xl`}
      >
        {text}
      </p>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="mx-auto text-center text-xl font-extrabold uppercase md:text-3xl xl:w-3/4 xl:text-4xl">
      {children}
    </h3>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="w-full cursor-pointer select-none rounded-lg bg-white px-6 py-4 transition-all lg:mx-auto lg:w-3/4 xl:px-12 xl:py-8">
      <h5 className="text-lg font-bold lg:text-xl xl:text-2xl">{question}</h5>
      <p className="mt-1 text-justify text-lg lg:text-start lg:text-xl xl:text-2xl">
        {answer}
      </p>
    </div>
  );
}

function InnerContainer({ children }) {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-center gap-2 lg:mt-8 lg:gap-4">
      {children}
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="flex w-full flex-col items-start justify-center">
      {children}
    </div>
  );
}

export default Service;
