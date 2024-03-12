import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

const validateField = (value, minLength, errorMessage) => {
  if (value.length > 0 && value.length <= minLength) {
    return errorMessage;
  }
  return null;
};

function ContactModal({ title = 'DEFAULT' }) {
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
            setEmail('');
            setMessage('');
            setBudget('');
            setProcessing(false);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  return (
    <div className="dialog fixed h-screen w-screen bg-black bg-opacity-80">
      <div className="dialog-inner absolute bottom-8 left-2/4 w-11/12 -translate-x-2/4 rounded-2xl border-4 border-black bg-primary p-4 text-black md:bottom-2 md:w-7/12 lg:w-5/12 lg:p-8 2xl:w-4/12">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 md:gap-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
            <Inputs>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md bg-black p-4 text-white"
                placeholder="exemple@exemple.com"
                autoComplete="email"
                value={email}
                onInput={(event) => setEmail(event.target.value)}
                onBlur={() => setDisplayEmailError(true)}
              />
            </Inputs>
            <Inputs className="hidden">
              <label htmlFor="object">Objet</label>
              <input
                type="text"
                name="object"
                id="object"
                value={object}
                readOnly
                className="disabled w-full rounded-md bg-gray-800 p-4 text-gray-500"
              />
            </Inputs>
          </div>
          <Inputs>
            <label htmlFor="budget">Votre budget*</label>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <Radio value="0€ - 500€" budget={budget} setBudget={setBudget} />
              <Radio
                value="500€ - 1000€"
                budget={budget}
                setBudget={setBudget}
              />
              <Radio
                value="1500€ - 3000€"
                budget={budget}
                setBudget={setBudget}
              />
              <Radio
                value="3000€ - 5000€"
                budget={budget}
                setBudget={setBudget}
              />
              <Radio value="+ 5000€" budget={budget} setBudget={setBudget} />
            </div>
          </Inputs>
          <Inputs>
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              className="h-48 w-full resize-none rounded-md bg-black p-4 text-white"
              placeholder="Décrivez moi votre budget avec le plus de détails possible, je vous répondrai le plus rapidement possible 😉"
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
                    {messageError && <li>{messageError}</li>}
                    {budgetError && <li>{budgetError}</li>}
                  </ul>
                </div>
              </div>
            )}
          <button
            className="mx-auto flex cursor-pointer items-center justify-center rounded-md bg-black px-4 py-2 uppercase text-primary transition-all"
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
      <span className="close absolute right-4 top-4 cursor-pointer rounded-md border-2 border-black bg-primary px-4 py-2 text-2xl text-black">
        X
      </span>
    </div>
  );
}

function Inputs({ children, className }) {
  return (
    <span
      className={`${className} flex w-full flex-col items-center justify-center gap-2 text-base md:text-lg`}
    >
      {children}
    </span>
  );
}

function Radio({ value, budget, setBudget }) {
  const isChecked = budget === value;

  return (
    <label
      htmlFor={`budget-${value}`}
      className={`${isChecked ? 'bg-black text-primary' : 'bg-primary text-black'}
      flex cursor-pointer flex-wrap items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-2 font-semibold`}
    >
      <input
        type="radio"
        name="budget"
        id={`budget-${value}`}
        value={value}
        className="hidden"
        checked={isChecked}
        onChange={() => setBudget(value)}
      />
      {value}
    </label>
  );
}

export default ContactModal;
