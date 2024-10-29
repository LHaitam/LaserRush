import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zwlhbmy", // Remplacez par votre service ID EmailJS
        "template_rnsuh32", // Remplacez par votre template ID EmailJS
        form.current,
        "jgrb235EjH_VJmyuM" // Remplacez par votre user ID EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <div id="contact" className="max-w-[1240px] m-auto p-4 h-screen">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2
            className="text-5xl mb-[-6] text-[#c5ae87] "
            style={{
              fontFamily: "Sacramento",
              fontStyle: "italic",
            }}
          >
            Contactez-Nous
          </h2>
        </div>
        <div>
          <h3 className="text-4xl mt-[-6px] mb-6 font-semibold text-center mx-6">
            BIENVENUE CHEZ LASER RUSH
          </h3>
        </div>
        <div className="mx-8">
          <p className="mb-4 text-center text-lg">
            Pour toute prise de contact ou rendez-vous, veuillez remplir et
            envoyer ce formulaire ci-dessus ou appeler le{" "}
            <a
              style={{
                fontFamily: "Raleway",
              }}
              className="hover:text-[#C4AF89] transition transform"
              href="tel:+33781195599"
            >
              0781195599
            </a>
            . 
          </p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="max-w-[600px] m-auto mb-[10rem]">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border rounded shadow-lg p-3"
            type="text"
            placeholder="Nom*"
            name="user_name"
            required
          />
          <input
            className="border rounded shadow-lg p-3"
            type="email"
            placeholder="E-Mail*"
            name="user_email"
            required
          />
        </div>
        <input
          className="border rounded shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Objet*"
          name="subject"
          required
        />
        <textarea
          className="border rounded shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="border border-#9c8c6d text-white font-bold bg-[#9c8c6d] rounded shadow-lg p-3 w-full mt-2 mb-6 transition duration-300 transform hover:scale-105 hover:bg-[#afa38a] hover:text-[white]"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
