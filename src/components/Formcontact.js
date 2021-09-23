import React from "react";

import { useRef } from "react";
import emailjs from "emailjs-com";

import "./Formcontact.css";

function Formcontact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8oqrm1c",
        "template_1l4um6o",
        e.target,
        "user_2vuZ59cc2iCFlm5gZULjY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="cont_formulario">
      <h4>Contacto</h4>
      <form className="formulario" ref={form} onSubmit={sendEmail}>
        <label for="name">Nombre: </label>
        <input type="text" name="user_name"></input>

        <label for="email">Email: </label>
        <input type="email" name="user_email"></input>

        <textarea id="textarea" rows="14" cols="30" name='message'></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Formcontact;
