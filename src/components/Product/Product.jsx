import React from "react";
import titleEditor from "../../utils/titleEditor";
import style from "./Product.module.scss";
import arrow from "../../assets/chevron.svg";

const Product = (props) => {
  const { product, selectedProductItem } = props;

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_image}>
          <img src={product.image} alt="Product Image" />
        </div>
        <h3 className={style.product_title}>{titleEditor(product.title)}</h3>
        <div
          className={
            product.id === selectedProductItem?.id
              ? style.product_arrow_active
              : style.product_arrow
          }
        >
          <img
            src={arrow}
            className={
              product.id === selectedProductItem?.id
                ? style.product_arrow_img_active
                : style.product_arrow_img
            }
            alt="arrow"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
