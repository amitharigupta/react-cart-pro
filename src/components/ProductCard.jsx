import React from 'react'

const ProductCard = ({id, name, price, handler, imgsrc}) => {
  return (
    <div className="productCard">
        <img src={imgsrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ name, price, id, quantity: 1, imgsrc }) }>Add to Cart</button>
    </div>
  )
}

export default ProductCard