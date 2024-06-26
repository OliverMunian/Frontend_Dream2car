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
import Carousel from "./carousel";
import Description from "./description";
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

  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <Intro/>
        <Carousel/>
        <Description/>
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
