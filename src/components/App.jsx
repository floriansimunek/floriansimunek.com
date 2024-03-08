import Footer from './Footer';
import Hero from './Hero';
import Section from './Section';

function App() {
  return (
    <>
      <Hero />
      <Section title="Créez votre site web" id="website-creation" />
      <Section
        title="Créez votre application React"
        id="react-app-creation"
        primary
      />
      <Section title="Intégration HTML & CSS" id="html-css-integration" />
      <Section
        title="Améliorez, réparez ou optimisez votre site web"
        id="upgrade-repair-optimize"
        primary
      />
      <Section
        title="Créez la maquette de votre site web"
        id="model-creation"
      />
      <Section
        title="Créez votre site web par vous-même"
        id="learn-to-create"
        primary
      />
      <Footer />
    </>
  );
}

export default App;
