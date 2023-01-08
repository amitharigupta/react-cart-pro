import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CartItem = ({id, imgsrc, name, price, qty, incrHandler, decrHandler, delHandeler}) => {

  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id }
    })
    dispatch({ type: "calculatePrice" })
  };
  const decrementHandler = (id) => {
    dispatch({
      type: "decrement",
      payload: id
    })
    dispatch({ type: "calculatePrice" })
  };
  const deleteHandeler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id
    })
    dispatch({ type: "calculatePrice" })
  };

  return (
    <div className="cartItem">
        <img alt={name} src={imgsrc} />
        <article>
            <h3>{name}</h3>
            <p>{price}</p>
        </article>

        <div>
            <button onClick={() => decrementHandler(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => incrementHandler(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHandeler(id)} />
    </div>
  )
}

export default CartItem