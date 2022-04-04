import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState(()=>{
try{
    const ProductLocalStorage=LOcalStorage.getItem("cartProducts");
    return ProductLocalStorage ? JSON.parse(ProductLocalStorage):[];
}catch(error){
    return[];
}
  
});
useEffect(()=>{
    localStorage.setItem("cartProducts", JSON.stringify(carItems));
}, [cartItems]);
const addItemToCart=(product)=>{
    const inCart= cartItems.find(
       (productInCar) =>productInCar.id === product.CartProvider
    );
};
export default CartContext;