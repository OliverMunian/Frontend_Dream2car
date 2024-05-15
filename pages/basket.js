import Header from "../components/Head";
import styles from "../styles/basket.module.css";
import { useState, useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { cartContext } from "../cardContext";
import Image from "next/image";
import A45 from "../public/A45.jpeg";
import { useRouter } from "next/navigation";

function Basket() {
  const router = useRouter();
  const cart = useContext(cartContext);
  const items = cart.items;
  const productQuantity = cart.getProductQuantity(items.id);
  let amount = 0;
  const data = () => {
    for (let i of items) {
      let price = i.quantity * i.price;
      price = parseFloat(price.toFixed(2));
      amount += price;
    }
    amount = parseFloat(amount.toFixed(2));
    return amount;
  };

  data();

  const parcoursLS = () => {
    if (typeof window !== "undefined") {
      for (let i = 0; i > localStorage.length; i++) {
        console.log(i);
      }
    }
  };
  parcoursLS();

  function backTo() {
    router.push("/");
  }

  const checkOut = async () => {
    await fetch('https://dream2car-backend.vercel.app/checkout',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response)=> {
      return response.json()
    }).then((data)=>{
      if(data){
        console.log(data.url)
        // window.location.assign(data.url)
        router.push(`${data.url}`);
      }
    })
  }

  return (
    <div className={styles.global}>
      <Header/>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}> VOTRE PANIER </h1>
        {items.length > 0 ? (
          items.map((product, i) => {
            return (
              <div className={styles.card} key={i}>
                <div className={styles.voiture}></div>
                <div className={styles.description}>
                  <h1>Concours Audi A1 </h1>
                  <h2>{product.description}</h2>
                  <p>{product.price} €</p>
                  <div className={styles.quantity}>
                    <button onClick={() => cart.removeOneToBasket(product)}>
                      -
                    </button>
                    {product.quantity}
                    <button onClick={() => cart.addOneProductToCart(product)}>
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <IoMdCloseCircleOutline
                    className={styles.close}
                    size={20}
                    onClick={() => cart.deleteFromCart(product)}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.emptyBasket}>
            <p>Votre panier est vide</p>
            <button onClick={() => backTo()}>RETOURNER À L'ACCUEIL</button>
          </div>
        )}
        {items.length > 0 ? (
        <div className={styles.total}>
          <div className={styles.boxTotal}>
            <div className={styles.amount}>
              SOUS-TOTAL : <div>{amount} €</div>
            </div>
            <div className={styles.amount}>
              COÛT TOTAL : <div>{amount} €</div>
            </div>
            <button variant='success' className={styles.pay} onClick={() => checkOut()}>PASSER AU PAIEMENT</button>
          </div>
        </div>
          ): 
          (<div></div>)}
      </div>
    </div>
  );
}

export default Basket;
