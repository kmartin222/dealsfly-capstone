import React from "react";
import jane from "../Images/jane.jpg";
import GradientText from "../Components/GradientText";
import "animate.css";

const Company = () => {
  return (
    <>
      <div className=''>
        {/* <svg className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg> */}

        <div className='mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-16 lg:mx-8 my-8 lg:max-w-none lg:grid-cols-2 bg-neutral-900 lg:items-start lg:gap-y-10'>
          <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1  lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-4 -ml-30'>
              <div className='lg:max-w-xl'>
                <h1 className='mt-20 -ml-70  text-2xl font font-bold animate__animated animate__bounceInLeft  text-gray-900 lg:text-8xl'>
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={5}
                    showBorder={false}
                    className='custom-class '
                  >
                    Deals Fly
                  </GradientText>
                </h1>
                <p className='mt-6 text-xl/6 text-white animate__animated animate__bounceInRight'>
                  Deals Fly wasn't born from spreadsheets or market research. It
                  was birthed from frustration. Frustration at endless searching
                  for deals that were actually good, frustration with the
                  clutter and overwhelm of online shopping – and yes, even
                  frustration with not feeling seen as a savvy shopper in a
                  world that often felt built for someone else.
                </p>
              </div>
            </div>
          </div>
          <div className=' -ml-12 p-12 mt-3 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 '>
            <img
              className='w-3xl max-w-none rounded-xl image bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228'
              src={jane}
              alt=''
            />
          </div>
          <div className='lg:col-span-6 -mt-20  lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
            <div className='lg:pr-3 ml-24'>
              <div className='max-w-xl mb-10 -mr-20 text-base/7  text-white lg:max-w-xl'>
                <p className=' animate__animated animate__bounceInLeft'>
                  Deals Fly was born from Sarah's mission: to create a community
                  where savvy shoppers could connect, share tips, and unlock
                  unbelievable savings without sacrificing quality or feeling
                  overwhelmed. We believe that smart shopping shouldn’t be hard
                  work; it should be fun!
                </p>

                <p className='mt-3 animate__animated animate__bounceInRight'>
                  We curate the best deals from across the web, hand-pick brands
                  we trust, and always put customer experience first. Because at
                  Deals Fly, we're more than just a platform – we're a community
                  of empowered shoppers who believe that great value doesn’t
                  have to come with compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li> */}

      {/* <!-- More people... --> */}
      {/* </ul>
  </div> */}
      {/* </div> */}
    </>
  );
};

export default Company;
