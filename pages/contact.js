import styles from "../styles/contact.module.css";
import Header from "../components/Head";
import { useState } from "react";
import { GiEmerald } from "react-icons/gi";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState(null);

  function handleChange(event) {
    if (event.target.name == "name") {
      setNom(event.target.value);
    }
    if (event.target.name == "prenom") {
      setPrenom(event.target.value);
    }
    if (event.target.name == "prenom") {
      setPrenom(event.target.value);
    }
    email;
    if (event.target.name == "email") {
      setEmail(event.target.value);
    }
    if (event.target.name == "message") {
      setMessage(event.target.value);
    }
    if (event.target.name == "phone") {
        setPhone(event.target.value);
    }
  }

  function sendMsg() {
    fetch("https://dream2car-backend.vercel.app/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nom,
        phone: phone,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          alert('Votre message à bien été envoyé !')
          router.push('/');
        }else{
            alert("Oups ! il semblerait que votre message n'a pas été envoyé !")
            console.log(data.error)
        }
      });
  }
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.title}>
        <h1>BESOIN D'UNE INFORMATION SUPPLÉMENTAIRE ? </h1>
        <p>
          Remplissez le formulaire contact ci-dessous pour nous faire parvenir
          toutes vos questions.
        </p>
      </div>
      <div className={styles.contact}>
        <form action="/send_email" className={styles.inputs}>
          <input
            placeholder="Nom"
            type="text"
            name="name"
            value={nom}
            onChange={handleChange}
          />
          <input
            placeholder="Prénom"
            type="text"
            name="prenom"
            value={prenom}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            placeholder="Numéro de téléphone"
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Saississez votre message"
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </form>
        <button
          className={styles.btn}
          onClick={() => {
            sendMsg();
          }}
        >
          ENVOYER
        </button>
      </div>
    </div>
  );
}

export default Contact;
