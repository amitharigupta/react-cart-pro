import React from 'react'
import CartItem from "./CartItem";
import "../styles/cart.scss";
import { useSelector } from 'react-redux';

const Cart = () => {

  const {cartItems, subTotal, tax, shipping, total} = useSelector(state => state.cart)
  return (
    <div className="cart">
        <main>
            {
                cartItems.length > 0 ? (
                    cartItems.map((i) => {
                        return <CartItem 
                        key={i.id} 
                        id={i.id} 
                        imgsrc={i.imgsrc} 
                        name={i.name} 
                        price={i.price} 
                        qty={i.quantity} 
                        // incrHandler={incrHandler} 
                        // decrHandler={decrHandler} 
                        // delHandeler={delHandeler}
                        />
                    })
                ) : <h1>No Items Yet</h1>
            }
        </main>
        <aside>
            <h2>Subtotal: $ { subTotal }</h2>
            <h2>Shipping: $ {shipping}</h2>
            <h2>Tax: {tax} %</h2>
            <h2>Total: $ {total}</h2>
        </aside>
    </div>
  )
}

export default Cart