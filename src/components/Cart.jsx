import React from 'react'
import CartItem from "./CartItem";
import "../styles/cart.scss";
import Image1 from "../assets/Image1.png";
import { useSelector } from 'react-redux';



const Cart = () => {

  const {cartItems} = useSelector(state => state.cart)
  return (
    <div className="cart">
        <main>
            {
                cartItems.length > 0 ? (
                    cartItems.map((i) => {
                        return <CartItem id={"abcd"} imgsrc={Image1} name={"Macbook"} price={1000} qty={1} />
                    })
                ) : <h1>No Items Yet</h1>
            }
        </main>
        <aside>
            <h2>Subtotal: ${ 2000 }</h2>
            <h2>Shipping: ${100}</h2>
            <h2>Tax: {5}%</h2>
            <h2>Total: {3000}%</h2>
        </aside>
    </div>
  )
}

export default Cart