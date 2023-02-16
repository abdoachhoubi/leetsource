import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AlertTriangle } from "react-feather";

// EmailJS Config
const contact = {
  KEY: process.env.NEXT_PUBLIC_CONTACT__PUB__KEY,
  SERV: process.env.NEXT_PUBLIC_CONTACT__SERV__ID,
  TEMP: process.env.NEXT_PUBLIC_CONTACT__TEMP__ID,
};

const Form = () => {
  // Form values
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // Form ref
  const form = useRef();

  // Form error visibility
  const [errorMessage, setErrorMessage] = useState("");
  const [error_visibility, setError_visibility] = useState("invisible");

  // Form validation
  const validate_form = () => {
    if (name === "") {
      setErrorMessage("Please enter your name.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    if (mail === "") {
      setErrorMessage("Please enter your email.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    if (
      !mail.includes("@") ||
      !mail.includes(".") ||
      mail.endsWith(".") ||
      mail.endsWith("@")
    ) {
      setErrorMessage("Please enter a valid email.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    if (message === "") {
      setErrorMessage("Please enter your message.");
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
      return false;
    }
    return true;
  };
  // Send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (validate_form()) {
      emailjs
        .sendForm(contact.SERV, contact.TEMP, form.current, contact.KEY)
        .then(() => {
          setMail("");
          setName("");
          setMessage("");
          setErrorMessage("Email has been sent successfully!");
          window.setTimeout(() => setError_visibility("invisible"), 3000);
        })
        .catch((e) => setErrorMessage(`${e.message}, try again later!`));
      setError_visibility("visible");
      window.setTimeout(() => setError_visibility("invisible"), 3000);
    }
  };
  return (
    <article className="s-section__form text-dark">
      <h1 className="s-heading mb-2 mt-2">Let&apos;s talk!</h1>
      <h2 className="s-subheading t-center mb-4 fw-400">
        If you have a suggestion or would like to learn more about us, please
        reach out by sending us a message.
      </h2>
      <form ref={form}>
        <input
          value={name}
          onFocus={() => setError_visibility("invisible")}
          onChange={(e) => setName(e.target.value)}
          className="s-form__input text"
          type="text"
          name="sub"
          placeholder="name"
          required
        />
        <input
          value={mail}
          onFocus={() => setError_visibility("invisible")}
          onChange={(e) => setMail(e.target.value)}
          className="s-form__input text"
          type="email"
          name="mail"
          placeholder="email"
          required
        />
        <textarea
          value={message}
          onFocus={() => setError_visibility("invisible")}
          onChange={(e) => setMessage(e.target.value)}
          className="s-form__input s-form__area text"
          name="text"
          placeholder="message"
          required
        />
      </form>
      <span className={`s-error mb-2 ${error_visibility}`}>
        <AlertTriangle color="#101010" size={20} />{" "}
        <p className="text">{errorMessage}</p>
      </span>
      <button onClick={sendMessage} className="button__dark text t-center">
        Send
      </button>
    </article>
  );
};

export default Form;
