import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../public/dreamCar-logo.png";
import { FaBasketShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { cartContext } from "../cardContext";
import { useState, useContext } from "react";
import Link from "next/link";

function Header() {
  const [modal, setModal] = useState(false);
  const cart = useContext(cartContext);
  const items = cart.items;
  let quantityBasket = 0;
  const productBasket = items.map((product) => {
    quantityBasket += product.quantity;
  });

  function handlePress() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <div style={{width: '100%'}}>
      <div className={styles.navbar}>
        <GiHamburgerMenu
          size={40}
          className={styles.icon}
          onClick={() => handlePress()}
        />
        <div className={styles.titleLogo}>
          <Link href="/">
            <Image src={Logo} width={300} height={100} />
          </Link>
          {/* <Image src={Logo} width={300} height={100} /> */}
        </div>
        <Link href="/basket">
          {quantityBasket > 0 ? (
            <div className={styles.basketAmount}>
              <FaBasketShopping size={40} className={styles.icon} />
              <div className={styles.quantityAmount}>{quantityBasket}</div>
            </div>
          ) : (
            <div className={styles.basketAmount}>
              <FaBasketShopping size={40} className={styles.icon} />
            </div>
          )}
        </Link>
      </div>
      {modal ? (
        <div className={styles.modal}>
          <div>
            <IoMdCloseCircleOutline
              className={styles.close}
              size={40}
              onClick={() => handleClose()}
            />
          </div>
          <div>
            <Link href='#concours' onClick={() => handleClose()} className={styles.link}><h1> CONCOURS </h1></Link>
            <Link href='#particpation' onClick={() => handleClose()} className={styles.link}><h1> PARTICIPATION</h1> </Link>
            <Link href='#FAQ' onClick={() => handleClose()} className={styles.link}><h1> FAQ </h1></Link> 
            <div className={styles.contact}>
            <Link href='/contact' className={styles.link}><h1> CONTACT </h1></Link> 
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
