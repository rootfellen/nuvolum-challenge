import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import style from "./styles/main.module.scss";
import { useApiGet } from "./hooks/useApiHook";
import API_URL from "./constants/api";
import mockup from "./assets/mockup";

const App = () => {
  // Setting state to store information about fetched products
  const [products, setProducts] = useState([]);

  // using custom hook "useApiHook" to get products data
  const data = useApiGet(API_URL);

  // setting products of fetched data from API
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div className={style.container}>
      {data.loading ? (
        <div className={style.fetching}>Loading data...</div>
      ) : (
        <div>
          <Header
            title="Heading"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        architecto neque illum eius error, totam mollitia reiciendis officiis
        quis magnam?"
          />
          <Slider products={products} fetchingError={data.error} />
        </div>
      )}
    </div>
  );
};

export default App;
