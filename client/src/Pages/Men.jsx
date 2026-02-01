import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productGetMany } from "../redux/productSlice";
import { productGetAll } from "../redux/productSlice";
import Newsletter from "../Components/Newsletter";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);
  // console.log("products", products);
  // const [newProject, setNewProject] = useState("");

  // When I call this Im calling all the projects to list out.
  useEffect(() => {
    dispatch(productGetAll());
  }, []);
  

  return (
    <div className='bg'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-white'>Men</h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products
            .filter((product) => product.gender === "male")
            .map((product, index) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product-detail/${product.id}`)}
                className='group relative'
              >
                <img
                  src={
                    new URL(`../Images/${product.img}`, import.meta.url).href
                  }
                  alt='Front of men&#039;s Basic Tee in black.'
                  className='image aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80'
                />
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-sm text-white'>
                      <a href='#'>
                        <span
                          aria-hidden='true'
                          className='absolute inset-0'
                        ></span>
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-white'>
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
};

export default Men;
