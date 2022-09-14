import React from "react";
import StarRating from "../RatingComponent/StarRating";
import style from "./Description.module.scss";

const Description = (props) => {
  const { selectedItem } = props;

  return (
    <div className={style.descriptionWrapper}>
      {!selectedItem ? (
        <p className={style.message}>Choose Item</p>
      ) : (
        <div className={style.descriptionContainer}>
          <div className={style.product_description_image}>
            <img src={selectedItem.image} />
          </div>
          <div className={style.product_description_price}>
            ${selectedItem.price}
          </div>
          <div className={style.product_description_info}>
            {selectedItem.description}
          </div>

          <div className={style.product_description_rate}>
            <StarRating index={selectedItem.rating.rate} />
            {`(${selectedItem.rating.count})`}
          </div>

          <button className={style.cta_btn}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default Description;
