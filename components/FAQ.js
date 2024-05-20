import styles from "../styles/faq.module.css";
import { TiArrowRightThick } from "react-icons/ti";
import { useState } from "react";

function FAQ() {
  const foireQuestions = [
    {
      Title: "COMMENT SE DÉROULE LE TIRAGE AU SORT ?",
      Description:
        "Le tirage au sort sera effectué en présence d'un huissier de justice, garantissant une transparence et équité la plus totale.",
    },
    {
      Title: "COMMENT PARTICIPER AU CONCOURS ?",
      Description:
        "Pour participer, selectionnez la formule de votre choix. Vous pouvez également augmenter vos chances de gagnez en augmentant vos participations",
    },
    {
      Title: "QUAND ET COMMENT LA VOITURE SERA-T-ELLE LIVRÉE AU GAGNANT ?",
      Description:
        "Le gagnant sera contacté directement à la suite du tirage au sort afin d'organiser la livraison. Nous nous adaptons aux besoins spécifiques du gagnant pour la remise du prix",
    },
    {
      Title: "Y A-T-IL UNE LIMITE AU NOMBRE D'INSCRIPTIONS POUR LE CONCOURS ?",
      Description:
        "Aucune limite de participation n'est imposée. Chaque participation accumulée, est une chance supplémentaire de remporter le concours",
    },
  ];
  const [visibleIndex, setVisibleIndex] = useState(null);

  const displayComment = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  function hideComment() {
    setDesctivate(true);
  }

  return (
    <div className={styles.mainfaq} id='FAQ'>
      <div className={styles.titlefaq}>
        <h1>DES QUESTIONS ?</h1>
        <div className={styles.subtitlefaq}>
          <h1>Checkez la F.A.Q 👀</h1>
        </div>
      </div>
      <div className={styles.wrapfaq}>
        {foireQuestions.map((element, i) => {
          return (
            <div className={styles.boxfaq} key={i}>
              <div className={styles.faq} style={{ height: visibleIndex === i ? '250px' : '130px', overflow: 'hidden' }}>
                <h1>{element.Title}</h1>
                {visibleIndex === i && <p>{element.Description}</p>}
              </div>
              {visibleIndex === i  ? 
              <TiArrowRightThick
                onClick={() => displayComment(i)}
                className={styles.arrowturn}
                fontSize={55}
              /> 
              : <TiArrowRightThick
              onClick={() => displayComment(i)}
              className={styles.arrow}
              fontSize={55}
            />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
