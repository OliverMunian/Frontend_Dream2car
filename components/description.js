import AudiA1 from "../public/Audi_a1.jpg";
import Image from "next/image";
import styles from "../styles/description.module.css";
import { useState, useEffect } from "react";

function Description() {
  const [windowSize, setWindowSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 746) setWindowSize(window.innerWidth);
      console.log("Ligne 15 - Window: " + windowSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Ligne 20 - Window: " + windowSize);
    };
  }, []);

  const rotationAngle = windowSize < 740 ? 5 : "";

  const prestations = [
    {
      Title: "Prenez les commandes",
      description:
        "Plongez dans l'élégance et la performance avec l'Audi A1 Sportback. Conçue pour ceux qui ne font aucun compromis entre style et dynamisme, cette voiture redéfinit le plaisir de conduire. Prêt à faire tourner les têtes et conquérir les routes ? Découvrez l'excellence avec l'Audi A1 Sportback",
      icone: "🚀",
    },
    {
      Title: "Participez au tirage au sort",
      description:
        "Pour participez au concours, rendez-vous un peu plus loin pour remplir le formulaire",
      icone: "⏳",
    },
    {
      Title: "Le gagnant du concours",
      description:
        "Le grand gagnant du cours se verra repartir avec les clés en main au volant de cette Audi A1 ",
      icone: "🔑",
    },
    {
      Title: "Huissier",
      description:
        "Le tirage au sort sera réalisé par notre huisser. La date du tirage au sort vous sera communiqué par mail",
      icone: "⚖️",
    },
  ];

  const prestationsDisplay = prestations.map((presta, i) => {
    if (windowSize < 740 && i == 2 ) {
      return (
        <div
          key={i}
          className={styles.allDescription}
          style={{ transform: 'rotate(5deg)' }}
        >
          <div className={styles.descriptionOne}>
            <h1>{presta.Title}</h1>
            <p>{presta.description}</p>
          </div>
          <div className={styles.icone}>
            <p>{presta.icone}</p>
          </div>
        </div>
      );
    }
    if (windowSize < 740 && i == 3 ) {
        return (
          <div
            key={i}
            className={styles.allDescription}
            style={{ transform: 'rotate(-5deg)' }}
          >
            <div className={styles.descriptionOne}>
              <h1>{presta.Title}</h1>
              <p>{presta.description}</p>
            </div>
            <div className={styles.icone}>
              <p>{presta.icone}</p>
            </div>
          </div>
        );
      }
    if (i == 1 || i == 2) {
      return (
        <div
          key={i}
          className={styles.allDescription}
          style={{ transform: `rotate(-5deg)` }}
        >
          <div className={styles.descriptionOne}>
            <h1>{presta.Title}</h1>
            <p>{presta.description}</p>
          </div>
          <div className={styles.icone}>
            <p>{presta.icone}</p>
          </div>
        </div>
      );
    }
    return (
      <div key={i} className={styles.allDescription}>
        <div className={styles.descriptionOne}>
          <h1>{presta.Title}</h1>
          <p>{presta.description}</p>
        </div>
        <div className={styles.icone}>
          <p>{presta.icone}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.divDescription}>
      <div className={styles.divTitleDescription}>
        <h1>
          SAISISSEZ VOTRE CHANCE DÈS{" "}
          <span className={styles.spanColor}> MAINTENANT </span>
        </h1>
        <div className={styles.divLuck}>
          <h1> 🍀🧙🥠 </h1>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.imgDescription}>
          <Image priority src={AudiA1} alt="Modele Audi A1" fill />
          <div className={styles.titleImageDescription}>
            <h1>
              AUDI A1 SPORTBACK
              <br />
              VALEUR: <span className={styles.spanColor}>23.760€</span> 💰{" "}
            </h1>
          </div>
        </div>
        <div className={styles.divBoxDescription}>{prestationsDisplay}</div>
      </div>
    </div>
  );
}

export default Description;
