import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const url = "https://62f5f23a612c13062b432108.mockapi.io/products/products";
  //use react hooks to display our data by setting product to null and once data is recieve dispatch it using useffect
  const [product, setProduct] = useState[null];
  //takes two pararmeters, a function and a variable and if this variable changes it dispatches a request again
  useEffect(() => {
    //using axios to get a request to our api
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);
  
  if (product) {
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }
  return <div></div>;
};

export default Product;
