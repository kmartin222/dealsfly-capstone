import React from "react";

const VoucherGift = () => {
  return (
    <div className='space-y-4 rounded-lg image bg-neutral-800 p-4 shadow-sm   sm:p-6'>
      <form className='space-y-4'>
        <div>
          <label
            htmlhtmlfor='voucher'
            className='mb-2 block text-sm font-medium text-white '
          >
            {" "}
            Do you have a voucher or gift card?{" "}
          </label>
          <input
            type='text'
            id='voucher'
            className='block w-full rounded-lg border border-gray-300 bg-neutral-900 p-2.5 text-sm text-white focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
            placeholder=''
            required
          />
        </div>
        <button
          type='submit'
          className='flex w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
          Apply Code
        </button>
      </form>
    </div>
  );
};

export default VoucherGift;
