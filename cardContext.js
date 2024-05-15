import { createContext, useState } from "react";
import { participation, getParticipationData } from "./particpationsStore";
import { clearPreviewData } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export const cartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  removeOneToBasket: () => {},
  addOneProductToCart: () => {},
  deleteFromCart: () => {},
  getTotalCostcart: () => {},
});

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const router = useRouter();

  function getProductQuantity(id) {
    const quantity = items.find((product) => product.id == id)?.quantity;

    if (quantity == undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneProductToCart(productDescription) {
    const quantity = getProductQuantity(productDescription.id);

    if (quantity === 0 || quantity === undefined) {
      setItems([
        ...items,
        {
          id: productDescription.id,
          quantity: 1,
          price: productDescription.price,
          description: productDescription.description,
        },
      ]);
      localStorage.setItem(
        `[${productDescription.description}, ${productDescription.price}]`,
        `${productDescription.quantity}`
      );
    } else {
      setItems(
        items.map((product) =>
          product.id == productDescription.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
      localStorage.setItem(
        `[${productDescription.description}, ${productDescription.price}]`,
        `${productDescription.quantity +1}`
      );
    }
    router.push("/basket");
  }

  console.log(items);

  function removeOneToBasket(productDescription) {
    const quantity = getProductQuantity(productDescription.id);

    if (quantity == 1) {
      deleteFromCart(productDescription);
      localStorage.removeItem(
        `${productDescription.description}`,
        `${productDescription.quantity}`
      );
    } else {
      setItems(
        items.map((product) =>
          product.id == productDescription.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
      localStorage.setItem(
        `[${productDescription.description}, ${productDescription.price}]`,
        `${productDescription.quantity -1}`
      );
    }
  }

  function deleteFromCart(productDescription) {
    setItems((product) =>
      product.filter((currentProduct) => {
        return currentProduct.id !== productDescription.id;
      })
    );
    localStorage.removeItem(
      `[${productDescription.description}, ${productDescription.price}]`,
      `${productDescription.quantity}`
    );
  }

  function getTotalCostcart() {
    let total = 0;
    items.map((cartItem) => {
      const participationData = getParticipationData(cartItem.id);
      total += (participationData.price * cartItem.quantity);
    });
    return total;
  }

  const contextValue = {
    items: items,
    getProductQuantity,
    removeOneToBasket,
    addOneProductToCart,
    deleteFromCart,
    getTotalCostcart,
  };

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}

export default CartProvider;
