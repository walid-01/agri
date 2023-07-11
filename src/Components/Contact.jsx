import "../Style/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_up52ap4",
        "template_cimgqlh",
        form.current,
        "soCATVNeA0wAxTDPk"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 style={{ fontFamily: "var(--title-font-family)" }}>CONTACT</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-item">
            <h2>Location: </h2>
            <p>Algeria, Annaba 23000</p>
          </div>
          <div className="contact-info-item">
            <h2>Email: </h2>
            <p>helpmeigra@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <h2>Phone Number: </h2>
            <p>05 55 55 55 55</p>
          </div>
        </div>
        <form ref={form} className="contact-email" onSubmit={sendEmail}>
          <div className="contact-email-name-email">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
            />
          </div>
          <input
            type="text"
            name="user_subject"
            required
            placeholder="Subject"
          />
          <textarea name="message" required placeholder="Message" rows="5" />
          <input
            type="submit"
            value="Send Message"
            className="email-submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
