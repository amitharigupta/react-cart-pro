import { AiFillDelete } from "react-icons/ai";

const CartItem = ({id, imgsrc, name, price, qty, incrHandler, decrHandler, deleteHandeler}) => {
  return (
    <div className="cartItem">
        <img alt={name} src={imgsrc} />
        <article>
            <h3>{name}</h3>
            <p>{price}</p>
        </article>

        <div>
            <button onClick={() => incrHandler(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => decrHandler(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHandeler(id)} />
    </div>
  )
}

export default CartItem