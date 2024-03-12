import Hero from '@components/Hero';
import Section from '@components/Section';
import Reviews from '@components/Reviews';

function Home() {
  return (
    <>
      <Hero />
      <Section
        title="Créez votre site web"
        id="website-creation"
        to="react-app-creation"
      />
      <Section
        title="Créez votre application React"
        id="react-app-creation"
        to="html-css-integration"
        primary
      />
      <Section
        title="Intégration HTML & CSS"
        id="html-css-integration"
        to="upgrade-repair-optimize"
      />
      <Section
        title="Améliorez, réparez ou optimisez votre site web"
        id="upgrade-repair-optimize"
        to="learn-to-create"
        primary
      />
      <Section
        title="Créez votre site web par vous-même"
        id="learn-to-create"
        to="reviews"
      />
      <Reviews title="Avis clients" id="reviews" to="footer" />
    </>
  );
}

export default Home;
