import Image from "next/image";
import React from "react";
import img from "/public/next.svg";

export default function page() {
  let products = ["Tomatoes", "Pesta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((m) => (
        <div className="food">
          <Image className="food-img" src={'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg'} width={500} height={400}/>
          <h4>{m} $40</h4>
        </div>
      ))}
    </div>
  );
}
