import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productGetMany } from "../redux/productSlice";
import { productGetAll } from "../redux/productSlice";
import Newsletter from "../Components/Newsletter";
import { Link, useNavigate } from "react-router-dom";


const ProductPreview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);


  // When I call this Im calling all the projects to list out.
  useEffect(() => {
    dispatch(productGetAll());
  }, []);

  return (
    <main>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='font-bold text-3xl mb-4'>Products</h2>

          <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {products.slice(0, 8).map((product) => (
              <span
                key={product.id}
                onClick={() => navigate(`/product-detail/${product.id}`)}
                className='group'
              >
                <img
                  src={
                    new URL(`../Images/${product.img}`, import.meta.url).href
                  }
                  alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
                  className='image aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8'
                />
                <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
                <p className='mt-1 text-lg font-medium text-gray-900'>
                  ${product.price}
                </p>
                {/* <button>Add to Bag</button> */}
              </span>
            ))}

            {/* <!-- More products... --> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPreview;
