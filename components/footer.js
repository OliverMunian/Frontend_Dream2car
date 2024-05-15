import styles from "../styles/footer.module.css";
import Logo from "../public/dreamCar-logo-reverse.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.mainfooter}>
      <div className={styles.logoreverse}>
        <Image src={Logo} width={300} height={100} />
      </div>
      <div className={styles.titles}>
        <div className={styles.encadre}>
          <h1>LE CONCOURS </h1>
          <ul>
            <li>
              {" "}
              <Link href="/" className={styles.link}> Accueil</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link} >Règlement du jeu concours</Link>
              </li>
            <li>
              <Link href="/contact" className={styles.link} >Nous contacter</Link>
            </li>
            <li>
              <Link href="#FAQ" className={styles.link}>F.A.Q</Link>
            </li>
          </ul>
        </div>
        <div className={styles.encadre}>
          <h1> UNE QUESTION </h1>
          <ul>
            <li>
              <Link href="/contact" className={styles.link} >Contact</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link} >Mentions Légales</Link>
              </li>
            <li>
               <Link href="/contact" className={styles.link} >Conditions générales de vente</Link>
               </li>
            <li>
              <Link href="/contact" className={styles.link} >Politique de confidentialité</Link>
              </li>
          </ul>
        </div>
        <div className={styles.encadre}>
          <h1> SUPPORT </h1>
          <h2> 📨 dream2car@mail.com </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
