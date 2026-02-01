import React from "react";

const PlusSign = () => {
  return (
    <svg
      className='w-2.5 h-2.5 text-white hover:text-black'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 18 18'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 1v16M1 9h16'
      />
    </svg>
  );
};

export default PlusSign;
