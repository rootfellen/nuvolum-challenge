import React, { useEffect, useState } from "react";
import Description from "../Description/Description";
import Product from "../Product/Product";
import style from "./Slider.module.scss";

const Slider = (props) => {
  const { products } = props;
  const [selected, setSelected] = useState(products[0]);

  // Handling Product Selection

  const productHandler = (product) => {
    if (selected && product.id === selected.id) {
      setSelected(null);
    } else {
      setSelected(product);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.productsContainer}>
        {products.map((product) => (
          <div key={product.id} onClick={() => productHandler(product)}>
            <Product
              key={product.id}
              product={product}
              selectedProductItem={selected}
            />
          </div>
        ))}
      </div>

      <Description product={products} selectedItem={selected} />
    </div>
  );
};

export default Slider;
