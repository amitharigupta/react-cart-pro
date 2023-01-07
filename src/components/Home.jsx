import React from "react"
import ProductCard from "./ProductCard";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image1.png";
import Image3 from "../assets/Image1.png";
import Image4 from "../assets/Image1.png";
import Image5 from "../assets/Image1.png";
import toast from "react-hot-toast";

const Home = () => {

  const productList = [
    {
      name: "Macbook",
      id: "1",
      price: 12500,
      imgsrc: Image1
    },
    {
      name: "Macbook Pro",
      id: "2",
      price: 20000,
      imgsrc: Image2
    },
    {
      name: "Macbook Air",
      id: "3",
      price: 30000,
      imgsrc: Image3
    },
    {
      name: "Macbook Air plus",
      id: "4",
      price: 35000,
      imgsrc: Image4
    },
    {
      name: "Mac Apple Plus",
      id: "5",
      price: 50000,
      imgsrc: Image5
    },
  ]

const addToCartHandler = (options) => {
  console.log(options);
  return toast.success('Added To Cart');
}
  return (
    <div className="home">
      {
        productList.map((i) => {
          return <ProductCard key={i.id} name={i.name} price={i.price} id={i.id} imgsrc={i.imgsrc} handler={addToCartHandler} />
        })
      }
    </div>
  )
}

export default Home