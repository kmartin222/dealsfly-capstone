import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { addToCart } from "../redux/cartSlice";
import { productGetOne, addProduct } from "../redux/productSlice";
import { ToastContainer, toast } from "react-toastify";
import { updateUserCart } from "../auth/authSlice";
import Reviews from "../SVG/Reviews";
import Sizes from "../SVG/Sizes";
import Colors from "../SVG/Colors";
import CreateAccount from "../Pages/CreateAccount";
// import ProductPreview from "../Components/ProductPreview";
// import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const { product } = useSelector((state) => state.product);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [selectedColor, setSelectedColor] = useState("");
  const [size, setSize] = useState("");
  const [addProductForm, setAddProductForm] = useState(" ");

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productGetOne(id));
  }, []);
  // console.log(product);
  // console.log(id);

  useEffect(() => {
    console.log("ProductInfo useEffect product", product);
  }, [product]);

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  // console.log("productDetail", product, id);

  // const submitForm = (e) => {
  //   // e.preventDefault();
  //   // console.log("addProductForm", addProductForm);
  //   // dispatch(addProduct({ ...addProductForm }));
  //   toast.success("Product Added Successfully");
  //   // setTimeout(() => {
  //   //   navigate("/products");
  //   // }, 3000);
  // };

  return (
    <div className='bg-neutral-300 image mx-auto max-w-2xl rounded-2xl -ml-82 -mr-62 mt-1 px-7   sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-10 lg:px-8 lg:pt-39 lg:pb-24'>
      <div className='lg:col-span-2 lg:border-r -mt-4 lg:border-gray-200 lg:pr-8 '>
        <h1 className='text-3xl -mt-8 font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {product.name}
        </h1>
      </div>

      {/* <!-- Options --> */}
      <div className='mt-2 lg:row-span-3 lg:mt-1'>
        <h2 className='sr-only'>Product information</h2>
        <p className='text-4xl tracking-tight text-gray-900'>
          ${product.price}
        </p>

        <Reviews />
        <form className='mt-10'>
          {/* <!-- Colors --> */}
          <div>
            <h3 className='text-sm font-medium text-gray-900'>Color</h3>
            <fieldset aria-label='Choose a color' className='mt-4'>
              <div className='flex items-center gap-x-3'>
                {product.color.map((product) => (
                  <label
                    aria-label='White'
                    className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-red-400 focus:outline-hidden'
                  >
                    <input
                      type='radio'
                      name='color-choice'
                      value={product}
                      // className='sr-only'
                      checked={selectedColor === product} // Set checked state based on selected color
                      // onChange={(e) => setSize(e.target.value)}
                      onChange={(e) =>
                        setAddProductForm({
                          ...addProductForm,
                          product: e.target.value,
                        })
                      }
                      onClick={(e) => setSelectedColor(e.target.value)}
                    />
                    <span
                      // aria-hidden='true'
                      className={` size-8 rounded-full border border-black/10 ${
                        product === "white"
                          ? "bg-white"
                          : product === "gray"
                          ? "bg-gray-500"
                          : product === "blue"
                          ? "bg-teal-300"
                          : product === "red"
                          ? "bg-red-600"
                          : product === "black"
                          ? "bg-black"
                          : product === "green"
                          ? "bg-green-600"
                          : product === "brown"
                          ? "bg-amber-950"
                          : product === "yellow"
                          ? "bg-yellow-400"
                          : product === "purple"
                          ? "bg-purple-700"
                          : product === "orange"
                          ? "bg-orange-500"
                          : ""
                      } `}
                    ></span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className='mt-1'>
            {/* <div className='flex items-center justify-between'>
              <h3 className='text-sm font-medium text-gray-900'>Size</h3>
            </div> */}

            <div className='mt-3'>
              <div className='flex items-center justify-between'>
                <h3 className='text-sm font-medium mt-6 text-gray-900'>Size</h3>
              </div>

              <fieldset aria-label='Choose a size' className='mt-4'>
                <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                  {product.size.map((product) => (
                    // <Sizes />
                    <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
                      <input
                        // onChange={(e) =>
                        //   setAddProductForm({
                        //     ...addProductForm,
                        //     product: e.target.value,
                        //   })
                        // }
                        onChange={(e) => setSize(e.target.value)}
                        type='radio'
                        name='size-choice'
                        value={product}
                        // className='sr-only'
                      />
                      <span>{product}</span>

                      <span
                        className='pointer-events-none absolute -inset-px rounded-md'
                        aria-hidden='true'
                      ></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
          {/* This needs to only show when logged in */}
          {/* Add to Cart Button */}
          {showCreateAccount && (
            <CreateAccount setShowCreateAccount={setShowCreateAccount} />
          )}
          {!isLoggedIn ? (
            <button
              onClick={() => setShowCreateAccount(true)}
              type='submit'
              className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent b bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 px-8 py-3 text-base font-medium text-black hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'
            >
              Create Account
            </button>
          ) : (
            // TODO: add color, size and quantity

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    userId: user.id,
                    product: { ...product, quantity: 1 },
                  })
                  // setProductAddedSuccess(true),      // Show the toast after success
                  // setTimeout(() => setProductAddedSuccess(false), 3000), // Hide after 3 seconds
                )
              }
              type='button'
              className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent b bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 px-8 py-3 text-base font-medium text-black hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden'
            >
              Add to bag
            </button>
          )}{" "}
          <ToastContainer />
        </form>
      </div>

      <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16'>
        {/* <!-- Description and details --> */}
        <div>
          <h3 className='sr-only'>Description</h3>

          <div className='space-y-6'>
            <p className='text-base text-gray-900'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor lacus quis nisl pharetra, at bibendum nulla ullamcorper.
              Proin auctor massa et arcu dapibus, in aliquet odio imperdiet. In
              hac habitasse platea dictumst. Morbi eget est vel enim pretium
              interdum. Integer feugiat erat quis odio tincidunt, a convallis ex
              tempus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        <div className='mt-10'>
          <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

          <div className='mt-4'>
            <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
              <li className='text-gray-400'>
                <span className='text-gray-600'>Hand cut and sewn locally</span>
              </li>
              <li className='text-gray-400'>
                <span className='text-gray-600'>
                  Dyed with our proprietary colors
                </span>
              </li>
              <li className='text-gray-400'>
                <span className='text-gray-600'>
                  Pre-washed &amp; pre-shrunk
                </span>
              </li>
              <li className='text-gray-400'>
                <span className='text-gray-600'>Ultra-soft 100% cotton</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10'>
          <h2 className='text-sm font-medium text-gray-900'>Details</h2>

          <div className='mt-4 space-y-6'>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor lacus quis nisl pharetra, at bibendum nulla
              ullamcorper.Proin auctor massa et arcu dapibus, in aliquet odio
              imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
