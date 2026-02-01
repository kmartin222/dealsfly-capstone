import React from "react";
import Newsletter from "../Components/Newsletter";
import ProductPreview from "../Components/ProductPreview";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <main>
      {/* <div className='grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500'>
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div> */}
      <Hero />
      <ProductPreview />
    </main>
  );
};

export default Home;
