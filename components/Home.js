import styles from "../styles/Home.module.css";
import Header from "./Head";
import Image from "next/image";
import Footer from "./footer";
import A45 from "../public/A45.jpeg";
import A45_1 from "../public/A45(1).jpeg";
import RS3 from "../public/RS3.jpeg";
import M8 from "../public/M8_Competition.jpg";
import Golf8R from "../public/Golf8R.jpeg";
import RSQ3 from "../public/RSQ3.jpeg";
import C63 from "../public/C63.jpg";
import GLE from "../public/GLE.jpg";
import A45interior from "../public/a45_interior.jpg";
import FAQ from "./FAQ";
import Intro from './introduction'
import { participation } from "../particpationsStore";
import { useState, useContext } from "react";
import { cartContext } from "../cardContext";
import { addOneProductToCart } from "../cardContext";
import Link from "next/link";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [product, setProduct] = useState(null);
  const [basket, setBasket] = useState([]);
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity();

  function handleCheckOne(option) {
    setSelectedOption(option.id);
    setProduct(option);
  }

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

  const participationDisplay = participation.map((participation, i) => {
    if (selectedOption === participation.id) {
      return (
        <div className={styles.choixUn} key={i}>
          <input
            type="radio"
            checked={true}
            value={participation.value}
            onChange={() => handleCheckOne(participation)}
          />
          <p>{participation.description} </p>
          <div>
            <p className={styles.priceBold}>{participation.price}€</p>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.choixUnBis} key={i}>
        <input
          type="radio"
          checked={selectedOption === participation.id}
          value={participation.value}
          onChange={() => handleCheckOne(participation)}
        />
        <p>{participation.description} </p>
        <div>
          <p className={styles.priceBold}>{participation.price}€</p>
        </div>
      </div>
    );
  });

  const imageDisplay = imageVehicule.map((voiture, i) => {
    return (
      <div className={styles.logoSlide} key={i}>
        <Image
          src={voiture.src}
          height={200}
          className={styles.imageCarousel}
          alt={voiture.alt}
        />
        <h2>{voiture.Title}</h2>
      </div>
    );
  });

  const prestationsDisplay = prestations.map((presta, i) => {
    if (i == 1 || i == 2) {
      return (
        <div key={i} className={styles.allIDescription}>
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
    <div>
      <Header></Header>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          CE TYPE DE VOITURE DANS{" "}
          <span className={styles.spanColor}> VOTRE GARAGE</span> ? <br />
          C'EST DÉSORMAIS POSSIBLE!
        </h1>
        <div className={styles.image}>
          <p>Photos non-contractuelles</p>
          <div className={styles.accroche}>
            <h1 className={styles.accrocheTitle}>
              Tentez votre chance dès maintenant 🔥
            </h1>
          </div>
          <div className={styles.A45}></div>
        </div> */}
        <Intro/>
        <div className={styles.divCarousel}>
          <div className={styles.divTitleCarousel}>
            <h1>
              Tentez également de{" "}
              <span className={styles.spanColor}> gagner </span> d'autres
              modèles 🤩
            </h1>
          </div>
          <div className={styles.carousel}>
            {imageDisplay}
            {imageDisplay}
          </div>
        </div>
        <div className={styles.divDescription}>
          <div className={styles.accrocheDescription}>
            <h1 className={styles.titleDescription}>
              SAISISSEZ VOTRE CHANCE DÈS{" "}
              <span className={styles.spanColor}> MAINTENANT </span>
            </h1>
            <div className={styles.luckDescription}>
              <h1> 🍀🧙🥠 </h1>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.imageDescription}></div>
            <div className={styles.titleImageDescription}>
              <h1>
                AUDI A1 SPORTBACK
                <br />
                VALEUR: <span className={styles.spanColor}>
                  23.760€
                </span> 💰{" "}
              </h1>
            </div>
            <div className={styles.allDescriptionIcone}>
              {prestationsDisplay}
            </div>
          </div>
        </div>
        <div className={styles.concours} id="particpation">
          <div className={styles.imageConcours}>{/* Image du CONCOURS */}</div>
          <div className={styles.concoursDescription}>
            <h1>
              INSCRIVEZ-VOUS POUR{" "}
              <span className={styles.spanColor}> PARTICIPER AU CONCOURS</span>{" "}
              📝
            </h1>
            <p>
              Selectionnez l'offre que vous souhaiter pour participer au
              concours
            </p>
            <p>
              Augmentez votre nombre de particpations pour augmenter vos chances
              de gagner{" "}
            </p>
            <p>Remplissez vos informations nécéssaires au tirage au sort </p>
            <p>Bonne chance !</p>
            <div className={styles.choix}>{participationDisplay}</div>
            <div className={styles.participe}>
              <button
                className={styles.participecenter}
                href="/basket"
                onClick={() => cart.addOneProductToCart(product)}
              >
                <h1>PARTICIPER</h1>
              </button>
            </div>
          </div>
          {/*Fermeture concours div*/}
        </div>
        <div className={styles.deroulement} id="concours">
          <div className={styles.deroulementTitle}>
            <h1>LE DÉROULEMENT DU CONCOURS</h1>
            <div className={styles.etapes}>
              <h1>EN 3 ÉTAPES</h1>
            </div>
          </div>
          <div className={styles.encadreEtape}>
            <div className={styles.deroulementEtape}>
              <h1>COMMENT PARTICIPER ?</h1>
              <p>
                Choississez le nombre de participations que vous souhaiter. Plus
                vous participer plus vous avez de grandes chances de remporter
                ce concours. Prenez le soin de bien vérifier vos informations
                pour que nous puissons vous contacter
              </p>
              <div className={styles.number}>
                <h1>1</h1>
              </div>
            </div>
            <div className={styles.deroulementEtape}>
              <h1>LE TIRAGE AU SORT</h1>
              <p>
                Pour garantir l'équité et la transparence de notre concours
                exceptionnel, le tirage au sort désignant le ou la gagnant(e) de
                la prestigieuse A45S AMG sera effectué en présence d'un huissier
                de justice, par maître Dupont, le tout retransmis en vidéo en
                direct pour vous permettre de vivre ce moment exclusif.
              </p>
              <div className={styles.number}>
                <h1>2</h1>
              </div>
            </div>
            <div className={styles.deroulementEtape}>
              <h1>LA VENUE DU GAGNANT</h1>
              <p>
                Une fois le nom du gagnant tiré au sort, on invitera ce dernier
                à nous rejoindre pour qu'il/elle puisse venir récuperer son prix
              </p>
              <div className={styles.number}>
                <h1>3</h1>
              </div>
            </div>
            <div className={styles.deroulementEtape}>
              <button className={styles.jeparticipe}>
                <Link href="#particpation" className={styles.lien}>
                  <h1>JE PARTICIPE !</h1>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <FAQ />
        <div className={styles.annexe}>
          <h2>
            D'autres questions ? N'hésitez pas consulter notre réglement pour
            avoir plus d'informations:
          </h2>
          <button>VOIR LE RÉGLEMENT</button>
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default Home;
