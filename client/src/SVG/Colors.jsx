import React from "react";

const Colors = () => {
  return (
    <div>
      <fieldset aria-label='Choose a color' className='mt-4'>
        <div className='flex items-center gap-x-3'>
          {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
          <label
            aria-label='White'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-red-400 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='White'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-white'
            ></span>
          </label>
          {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
          <label
            aria-label='Gray'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-blue-400 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Gray'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-200'
            ></span>
          </label>
          {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
          <label
            aria-label='Black'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-black focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Black'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-900'
            ></span>
          </label>
          <label
            aria-label='Black'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-green-900 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Black'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-900'
            ></span>
          </label>
          <label
            aria-label='Black'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-brown-900 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Black'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-900'
            ></span>
          </label>
          <label
            aria-label='Black'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Black'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-900'
            ></span>
          </label>
          <label
            aria-label='Black'
            className='relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden'
          >
            <input
              type='radio'
              name='color-choice'
              value='Black'
              className='sr-only'
            />
            <span
              aria-hidden='true'
              className='size-8 rounded-full border border-black/10 bg-gray-900'
            ></span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Colors;
