import Footer from './Footer';
import Hero from './Hero';
import Section from './Section';

function App() {
  return (
    <>
      <Hero />
      <Section title="Créez votre site web" />
      <Section title="Créez votre application React" primary />
      <Section title="Intégration HTML & CSS" />
      <Section title="Améliorez, réparez ou optimisez votre site web" primary />
      <Section title="Créez la maquette de votre site web" />
      <Section title="Créez votre site web par vous-même" primary />
      <Footer />
    </>
  );
}

export default App;
