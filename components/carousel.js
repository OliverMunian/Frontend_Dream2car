import styles from "../styles/carousel.module.css";
import Image from "next/image";
import RS3 from "../public/RS3.jpeg";
import M8 from "../public/M8_Competition.jpg";
import Golf8R from "../public/Golf8R.jpeg";
import RSQ3 from "../public/RSQ3.jpeg";
import C63 from "../public/C63.jpg";
import GLE from "../public/GLE.jpg";

function Carousel() {
  const imageVehicule = [
    {
      Title: "Audi RS3",
      src: RS3,
      alt: "Modele Audi RS3",
    },
    {
      Title: "Volkswagen Golf 8R",
      src: Golf8R,
      alt: "Modele Golf8R",
    },
    {
      Title: "Audi RQS3",
      src: RSQ3,
      alt: "Modele Audi RSQ3",
    },
    {
      Title: "BMW M8 Competition",
      src: M8,
      alt: "Modele BMW M8 Competition",
    },
    {
      Title: "Mercedes-Benz C63 AMG",
      src: C63,
      alt: "Modele Mercedes-Benz C63 AMG",
    },
    {
      Title: "Mercedes-Benz GLE AMG",
      src: GLE,
      alt: "Modele Mercedes-Benz GLE AMG",
    },
  ];

  const imageDisplay = imageVehicule.map((voiture, i) => {
    return (
      <div className={styles.vehicule} key={i}>
        <Image
          unoptimized
          src={voiture.src}
          height={250}
          className={styles.imageCarousel}
          alt={voiture.alt}
          priority
        />
        <h2>{voiture.Title}</h2>
      </div>
    );
  });

  return (
    <div className={styles.divCarousel}>
      <div className={styles.divTitleCarousel}>
        <h1>
          Tentez également de <span className={styles.spanColor}> gagner </span>{" "}
          d'autres modèles 🤩
        </h1>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselItem}>{imageDisplay}</div>
        <div className={styles.carouselItem}>{imageDisplay}</div>
      </div>
    </div>
  );
}

export default Carousel;
