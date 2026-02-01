import React from "react";

const Sizes = () => {
  return (
    <>
      {/* <!-- Sizes --> */}
      <div className='mt-3'>
        <div className='flex items-center justify-between'>
          <h3 className='text-sm font-medium text-gray-900'>Size</h3>
        </div>

        <fieldset aria-label='Choose a size' className='mt-4'>
          <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='XXS'
                disabled
                className='sr-only'
              />
              <span>XXS</span>
              <span
                aria-hidden='true'
                className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='XS'
                className='sr-only'
              />
              <span>XS</span>
              {/* <!--
                    Active: "border", 
                    Not Active: "border-2"
                    Checked: "border-indigo-500", 
                    Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='S'
                className='sr-only'
              />
              <span>S</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='M'
                className='sr-only'
              />
              <span>M</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='L'
                className='sr-only'
              />
              <span>L</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='XL'
                className='sr-only'
              />
              <span>XL</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='2XL'
                className='sr-only'
              />
              <span>2XL</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
            {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
            <label className='group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
              <input
                type='radio'
                name='size-choice'
                value='3XL'
                className='sr-only'
              />
              <span>3XL</span>
              {/* <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  --> */}
              <span
                className='pointer-events-none absolute -inset-px rounded-md'
                aria-hidden='true'
              ></span>
            </label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Sizes;

//   <label className='group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6'>
//                    <input
//                    type='radio'
//                    name='size-choice'
//                    value='XS'
//                    className='sr-only'
//                  />

//                   <span
//                      aria-hidden='true'
//                      className={` group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6
// ${
//       product === "S" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
// product === "M" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "L" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "XL" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//  product === "XS" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
// product === "2XL" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "3XL" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "XL" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//  product === "40" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
// product === "42" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "44" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//       product === "46" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
//  product === "36" ? "cursor-pointer bg-white text-gray-900 shadow-xs" :
// product === "38" ? "cursor-pointer bg-white text-gray-900 shadow-xs" : 
// ""

//                    } `}
//                    ></span>
//                </label>
