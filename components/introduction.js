import styles from "../styles/introduction.module.css";
import AudiA1 from "../public/AudiA1.jpeg";
import Image from "next/image";

function Introduction() {
  return (
    <div className={styles.introduction}>
      <h1>
        CE TYPE DE VOITURE DANS
        <span className={styles.spanColor}> VOTRE GARAGE</span> ? <br />
        C'EST DÉSORMAIS POSSIBLE!
      </h1>
      <div className={styles.image}>
        <Image
          priority
          src={AudiA1}
          alt="Modèle Audi A1"
          sizes="(max-width: 700px) 100w, 700px"
          fill
          className={styles.img}
        />
        <div className={styles.imageIntroduction}>
          <h1 className={styles.titleImageIntroduction}>
            Tentez votre chance dès maintenant 🔥
          </h1>
        </div>
      </div>
      <div className={styles.asterix}>
        <p>*Photos non-contractuelles</p>
      </div>
    </div>
  );
}

export default Introduction;
