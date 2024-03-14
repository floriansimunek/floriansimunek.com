import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const validateField = (value, minLength, errorMessage) => {
  if (value.length > 0 && value.length <= minLength) {
    return errorMessage;
  }
  return null;
};

const formatText = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};

function ContactModal({
  title = 'DEFAULT',
  isOpen = false,
  closeModal,
  forceCloseModal,
}) {
  const form = useRef();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('');
  const [object, setObject] = useState('');

  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [budgetError, setBudgetError] = useState(null);

  const [displayEmailError, setDisplayEmailError] = useState(false);
  const [displayMessageError, setDisplayMessageError] = useState(false);
  const [displayBudgetError, setDisplayBudgetError] = useState(false);

  const [processing, setProcessing] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    setObject(title);

    setEmailError(
      email.trim().length > 0 &&
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
        ? "Votre adresse mail n'est pas dans un format correct"
        : null,
    );
    setMessageError(
      validateField(
        message.trim(),
        9,
        'Votre message doit faire au moins 10 caractères',
      ),
    );

    if (email.trim() === '') {
      setEmailError('Veuillez entrer votre adresse e-mail');
    }

    if (message.trim() === '') {
      setMessageError('Veuillez entrer un message');
    }

    if (budget.trim() === '') {
      setBudgetError('Veuillez indiquer votre budget');
    } else {
      setBudgetError(null);
    }
  }, [email, message, budget, title]);

  const sendEmail = (e) => {
    e.preventDefault();
    setDisplayEmailError(true);
    setDisplayMessageError(true);
    setDisplayBudgetError(true);

    if (!emailError && !messageError && !budgetError) {
      setProcessing(true);
      setDisplayEmailError(false);
      setDisplayMessageError(false);
      setDisplayBudgetError(false);
      emailjs
        .sendForm(
          'service_5zko4hj',
          'template_ngj61qe',
          form.current,
          '3c9AdUJdzSpN2bBq6',
        )
        .then(
          () => {
            forceCloseModal();
            setSuccessModalOpen(true);
            document.body.classList.add('modal-opened');
            setEmail('');
            setMessage('');
            setBudget('');
            setProcessing(false);
          },
          () => {
            forceCloseModal();
            setErrorModalOpen(true);
            document.body.classList.add('modal-opened');
          },
        );
    }
  };

  return (
    <>
      <div
        className={`${isOpen ? 'block' : 'hidden'} dialog fixed bottom-0 left-0 right-0 top-0 h-screen w-screen bg-black bg-opacity-80`}
        onClick={(e) => closeModal(e)}
      >
        <div className="dialog-inner absolute bottom-8 left-2/4 max-h-svh w-11/12 -translate-x-2/4 rounded-2xl border-4 border-black bg-primary p-4 text-black md:bottom-2 md:w-7/12 lg:w-5/12 lg:p-8 2xl:w-4/12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-2 md:gap-4"
          >
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
              <Inputs>
                <label htmlFor={`email-${formatText(title)}`}>Email*</label>
                <input
                  type="email"
                  name="email"
                  id={`email-${formatText(title)}`}
                  className="w-full rounded-md bg-black p-4 text-white"
                  placeholder="exemple@exemple.com"
                  autoComplete="email"
                  value={email}
                  onInput={(event) => setEmail(event.target.value)}
                  onBlur={() => setDisplayEmailError(true)}
                />
              </Inputs>
              <Inputs className="hidden">
                <label htmlFor={`object-${formatText(title)}`}>Objet</label>
                <input
                  type="text"
                  name="object"
                  id={`object-${formatText(title)}`}
                  value={object}
                  readOnly
                  className="disabled w-full rounded-md bg-gray-800 p-4 text-black"
                />
              </Inputs>
            </div>
            <Inputs>
              <fieldset className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <legend className="mx-auto mb-2 text-center md:mb-4">
                  Votre budget*
                </legend>
                <Radio
                  value="0€ - 500€"
                  budget={budget}
                  setBudget={setBudget}
                  title={title}
                />
                <Radio
                  value="500€ - 1000€"
                  budget={budget}
                  setBudget={setBudget}
                  title={title}
                />
                <Radio
                  value="1500€ - 3000€"
                  budget={budget}
                  setBudget={setBudget}
                  title={title}
                />
                <Radio
                  value="3000€ - 5000€"
                  budget={budget}
                  setBudget={setBudget}
                  title={title}
                />
                <Radio
                  value="+ 5000€"
                  budget={budget}
                  setBudget={setBudget}
                  title={title}
                />
              </fieldset>
            </Inputs>
            <Inputs>
              <label htmlFor={`message-${formatText(title)}`}>Message*</label>
              <textarea
                name="message"
                id={`message-${formatText(title)}`}
                className="h-48 w-full resize-none rounded-md bg-black p-4 text-white"
                placeholder="Décrivez moi votre projet avec le plus de détails possible 😉"
                value={message}
                onInput={(event) => setMessage(event.target.value)}
                onBlur={() => setDisplayMessageError(true)}
              />
            </Inputs>
            {(displayEmailError || displayMessageError || displayBudgetError) &&
              (emailError || messageError || budgetError) && (
                <div className="w-full rounded-md bg-red-950 p-4">
                  <h3 className="text-sm font-medium text-red-600">
                    Le formulaire n&apos;est pas rempli
                  </h3>
                  <div className="mt-4 text-sm text-red-500">
                    <ul className="list-disc space-y-1 pl-5">
                      {emailError && <li>{emailError}</li>}
                      {budgetError && <li>{budgetError}</li>}
                      {messageError && <li>{messageError}</li>}
                    </ul>
                  </div>
                </div>
              )}
            <button
              className="mx-auto flex cursor-pointer items-center justify-center rounded-md border-2 border-black bg-black px-4 py-2 text-lg uppercase text-primary transition-all hover:bg-primary hover:text-black lg:text-xl"
              type="submit"
              disabled={processing}
            >
              {processing && (
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {processing
                ? "Votre message est en cours d'envoi"
                : 'Envoyer votre message'}
            </button>
          </form>
        </div>
        <span
          className="close absolute right-4 top-4 cursor-pointer px-4 py-2 text-2xl text-primary"
          onClick={(e) => closeModal(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="pointer-events-none h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      {successModalOpen && (
        <div
          className="fixed inset-0 h-full w-full bg-black bg-opacity-80"
          style={{ zIndex: '99999' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSuccessModalOpen(false);
              setProcessing(false);
              document.body.classList.remove('modal-opened');
            }
          }}
        >
          <span
            className="close absolute right-4 top-4 cursor-pointer px-4 py-2 text-2xl text-primary"
            onClick={() => {
              setSuccessModalOpen(false);
              setProcessing(false);
              document.body.classList.remove('modal-opened');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="pointer-events-none h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
          <div className="absolute left-1/2 top-1/2 h-auto w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-black bg-primary p-4 text-center sm:w-10/12 sm:p-8 lg:w-6/12 2xl:w-2/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mb-4 max-h-16 w-full sm:max-h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h5 className="text-2xl font-semibold leading-6 text-black">
              Votre email à été envoyé
            </h5>
            <div className="mt-4">
              <p className="text-xl text-black">
                Bonjour 👋
                <br />
                et merci pour votre message !
                <br />
                <br />
                Je répond à votre email le plus rapidement possible !
                <br />
                Pensez à regarder votre boite mail 😊
              </p>
            </div>
          </div>
        </div>
      )}
      {errorModalOpen && (
        <div
          className="fixed inset-0 h-full w-full bg-black bg-opacity-80"
          style={{ zIndex: '99999' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setErrorModalOpen(false);
              setProcessing(false);
              document.body.classList.remove('modal-opened');
            }
          }}
        >
          <span
            className="close absolute right-4 top-4 cursor-pointer px-4 py-2 text-2xl text-primary"
            onClick={() => {
              setErrorModalOpen(false);
              setProcessing(false);
              document.body.classList.remove('modal-opened');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="pointer-events-none h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
          <div className="absolute left-1/2 top-1/2 h-auto w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-black bg-primary p-4 text-center sm:w-10/12 sm:p-8 lg:w-6/12 2xl:w-2/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mb-4 max-h-16 w-full sm:max-h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            <h5 className="text-2xl font-semibold leading-6 text-black">
              Une erreur est survenue
            </h5>
            <div className="mt-2">
              <p className="text-lg text-black">
                Votre email n&apos;a pas été envoyé, complétez à nouveau le
                formulaire
              </p>
              <br />
              <p className="text-lg text-black">
                Ça ne fonctionne toujours pas ?
                <br />
                Envoyez-moi un email directement
                <br />
                <a
                  href="mailto:contact@floriansimunek.com"
                  className="mx-auto mt-4 block w-fit rounded-md bg-black px-4 py-2 text-primary"
                >
                  <span aria-hidden="true">&rarr;&nbsp;</span>
                  contact@floriansimunek.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Inputs({ children, className = '' }) {
  return (
    <span
      className={`${className} flex w-full flex-col items-center justify-center gap-2 text-base md:text-lg`}
    >
      {children}
    </span>
  );
}

function Radio({ value, title, budget, setBudget }) {
  const isChecked = budget === value;

  return (
    <label
      htmlFor={`budget-${formatText(value)}-${formatText(title)}`}
      className={`${isChecked ? 'bg-black text-primary' : 'bg-primary text-black'}
      flex cursor-pointer flex-wrap items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-2 font-semibold`}
      onClick={() => setBudget(value)}
    >
      <input
        type="radio"
        name="budget"
        id={`budget-${formatText(value)}-${formatText(title)}`}
        value={value}
        className="hidden"
        checked={isChecked}
        readOnly
      />
      {value}
    </label>
  );
}

export default ContactModal;
