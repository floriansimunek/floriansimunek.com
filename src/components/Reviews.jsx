import { ArrowButton } from '@components/ArrowLink';
import { useEffect, useState } from 'react';
import Section from './Section';

const TEXTS = [
  {
    text: 'Quoi dire de ce service que GENIAL, Florian_S est un professionnel au top. On donne 5 étoiles en général mais 10/10 est encore mieux. Vous pouvez y aller les yeux fermés. Rapide, fiable. Je recommande à 100%.',
    author: 'GERMANYLOIS',
  },
  {
    text: "Florian est à l'écoute. Il cherche à comprendre et à conseiller du mieux possible son client. Il livre très rapidement, tout en donnant le meilleur de lui-même quand il s'agit de régler des problèmes même une fois le service livré. Merci !",
    author: 'Baptiste_Nardi',
  },
  {
    text: "Merci infiniment pour le professionnalisme, la compréhension et la rapidité de Florian !! il était LA jusqu'au bout pour finaliser le responsive ! vraiment un travail de maitre et surtout la patience et la bienveillance humaine. Merci encore !!",
    author: 'LORE1',
  },
  {
    text: "Florian_S à répondu à ma demande en un temps record. Il a su faire une page web qui correspondait à ma description, et était bien à l'écoute pour les demandes de révisions aussi. Je suis très satisfait.",
    author: 'Rangeman',
  },
  {
    text: 'Parfait Merci Florian pour ton travail. Je recommande à 100% et hâte de travailler avec toi pour les projets futurs! :)',
    author: 'Ryan_SalesGrowth',
  },
  {
    text: 'Merci pour cette réalisation. Réactif, à la soucis du détail et est très pédagogue. Je recommande vivement Florian pour vos projets web',
    author: 'RomainWS',
  },
  {
    text: 'Florian a été très rapide et super efficace, il nous a aidé dans un moment de détresse juste avant une deadline et on le remercie 1000 fois, il nous a même donné des indications pour régler des problèmes supplémentaires! Je recommande à 100%',
    author: 'Judyab1',
  },
  {
    text: "Merci beaucoup à Florian qui est très bon dans tout ce qu'il fait ! J'ai déjà fais appel à lui pour d'autres tâches et il a toujours réussi a régler mes problèmes très rapidement, c'est quelqu'un de patient et qui sait s'adapter en fonction des problématiques. Il est au top, je le recommande vivement ! Merci encore.",
    author: 'juliaupf',
  },
  {
    text: 'Très satisfait de la prestation de Florian. Il a pris le temps de comprendre mes besoins et à fais le nécessaire. Très bon contact. Je recommande.',
    author: 'gregorygaucher',
  },
  {
    text: "Florian s'est montré très professionnel. Commande livrée largement dans les temps. On garde contact pour la suite!",
    author: 'SamYa91',
  },
];

function Review({ title, id, to, ...props }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      indexUp();
    }, 1000 * 10);
    return () => clearInterval(timer);
  }, []);

  function indexUp() {
    setIndex((index) => index + 1);
  }

  function indexDown() {
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(TEXTS.length - 1);
    }
  }

  return (
    <Section
      className="relative gap-8 md:gap-16"
      title={title}
      id={id}
      to={to}
      {...props}
      primary
    >
      <div className="mx-auto flex h-full w-full flex-1 flex-col items-center justify-center gap-2 md:w-3/4 md:gap-4 lg:w-3/5 2xl:w-2/4">
        <span className="text-center text-xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl">
          &quot;{TEXTS[index % TEXTS.length].text}&quot;
        </span>
        <span className="text-lg">@{TEXTS[index % TEXTS.length].author}</span>
        <span className="flex items-center justify-center text-xs">
          {(index % TEXTS.length) + 1} / {TEXTS.length}
        </span>
      </div>
      <div className="absolute bottom-8 left-2/4 flex w-full -translate-x-2/4 items-center justify-start gap-8 pl-8 md:justify-center md:gap-16 md:pl-0 lg:bottom-16">
        <ArrowButton onClick={indexDown} className="!rotate-90" />
        <ArrowButton onClick={indexUp} className="!-rotate-90" />
      </div>
    </Section>
  );
}

export default Review;
