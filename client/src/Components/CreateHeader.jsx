import GradientText from "../Components/GradientText";

const CreateHeader = () => {
  return (
    <div className='relative isolate overflow-hidden ml-1 mt-3 bg-neutral-900 py-16 sm:py-20 lg:py-2'>
      <div className='mx-auto max-w-4xl px-4 -mb-30 lg:px-30'>
        <div className='mx-auto animate-pulse grid max-w-4xl mt-12 -ml-6 grid-cols-1 gap-x-30 gap-y-8 lg:max-w-none lg:grid-cols-2'>
          <svg
            className='logo2'
            xmlns='http://www.w3.org/2000/svg'
            height='36'
            width='36'
            viewBox='0 0 512 512'
          >
            <path
              fill='#63E6BE'
              d='M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 
		  110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0
		  0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4
		  1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z'
            />
          </svg>
          <div className='mb-3'>
         
            <h2 className='font text-6xl -ml-15 font-bold tracking-widest text-white'>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={5}
              showBorder={false}
              className='custom-class '
            >
              Deals Fly...
            </GradientText>
            </h2>

            <div className='mt-6 flex max-w-md gap-x-4'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHeader;
