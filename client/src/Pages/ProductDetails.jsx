import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { productGetOne } from "../redux/productSlice";
import ProductInfo from "../Components/ProductInfo";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productGetOne(id));
  }, []);

  useEffect(() => {
    console.log("ProductDetails useEffect product", product);
  }, [product]);

    useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
    }, [useLocation()]);

  return (
    <>
      <section className='py-8   md:py-16  antialiased'>
        <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
            <div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
              <img
                className='image rounded-2xl w-full -ml-72 '
                src={new URL(`../Images/${product.img}`, import.meta.url).href}
                alt=''
              />
            </div>
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
