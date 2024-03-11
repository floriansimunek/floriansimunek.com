import Footer from './Footer';
import Hero from './Hero';
import Section from './Section';

function App() {
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
        to="model-creation"
        primary
      />
      <Section
        title="Créez la maquette de votre site web"
        id="model-creation"
        to="learn-to-create"
      />
      <Section
        title="Créez votre site web par vous-même"
        id="learn-to-create"
        to="footer"
        primary
      />
      <Footer />
    </>
  );
}

export default App;
