import { useState } from 'react';
import ArrowLink from './ArrowLink';
import ButtonLink from './ButtonLink';
import ContactModal from './ContactModal';
import Container from './Container';

function Section({ title, primary, id, to, children, className, slug }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
    document.body.classList.add('modal-opened');
  }

  function closeModal(e) {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.body.classList.remove('modal-opened');
    }
  }

  function forceCloseModal() {
    setIsModalOpen(false);
    document.body.classList.remove('modal-opened');
  }

  return (
    <>
      <Container primary={primary} className={className} id={id}>
        <Title>{title}</Title>
        {children && children}
        <div
          className={`flex w-full items-center justify-between
        ${primary ? 'flex-row-reverse' : ''}`}
        >
          <ArrowLink to={to} />
          {!children && (
            <div
              className={`right flex flex-col justify-center gap-2
          ${primary ? 'items-start' : 'items-end'}`}
            >
              <ButtonLink primary={primary} onClick={openModal}>
                Demander un devis
              </ButtonLink>
              <ButtonLink primary={primary} to={`/services/${slug}`}>
                En savoir plus
              </ButtonLink>
            </div>
          )}
        </div>
      </Container>
      <ContactModal
        title={title}
        isOpen={isModalOpen}
        closeModal={closeModal}
        forceCloseModal={forceCloseModal}
      />
    </>
  );
}

export function Title({ children }) {
  return (
    <h2 className="w-full text-start text-5xl font-extrabold uppercase md:text-6xl lg:w-4/5 lg:text-7xl 2xl:w-3/5">
      {children}
    </h2>
  );
}

export default Section;
