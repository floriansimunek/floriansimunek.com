import Hero from '@components/Hero';
import Section from '@components/Section';
import Reviews from '@components/Reviews';
import services from '@/services';

function Home() {
  return (
    <>
      <Hero />
      {Object.keys(services).map((key, k) => {
        const service = services[key];

        return (
          <Section
            key={service.title}
            title={service.title}
            id={service.id}
            to={service.to}
            slug={service.slug}
            primary={k % 2 !== 0}
          />
        );
      })}
      <Reviews title="Avis clients" id="reviews" to="footer" />
    </>
  );
}

export default Home;
