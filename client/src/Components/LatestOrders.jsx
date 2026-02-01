import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetMany } from "../redux/completedSlice";
import { useParams, useNavigate, NavLink } from "react-router";
// import { completedGetOne } from "../redux/completedSlice";

const LatestOrders = () => {
  const { user } = useSelector((state) => state.auth);
  const { completed } = useSelector((state) => state.completed);
  const [showContent, setShowContent] = useState("");
  const dispatch = useDispatch();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    dispatch(GetMany());
  }, []);
  // console.log("GetMany", GetMany)
  // console.log("completed", completed)

  useEffect(() => {
    // console.log("user", user);
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  }, []);

  return (
    <div className='rounded-lg  image bg-neutral-800 md:p-8'>
      <h3 className='mb-4 text-xl font-semibold text-gray-900 dark:text-white'>
        Latest orders
      </h3>
      {showContent && (
        <div>
          {completed
            .filter((completed) => completed.email === user.email)
            .map((completed, index) => (
              <div
                key={completed.id}
                className='flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5'
              >
                <dl className='w-1/2 sm:w-48'>
                  <dt className='text-base font-medium text-gray-500 dark:text-gray-400'>
                    Order ID:
                  </dt>
                  <dd className='mt-1.5 text-base font-semibold text-gray-900 dark:text-white'>
                    <a href='#' className='hover:underline'>
                      #{completed.id.slice(15, 28)}
                    </a>
                  </dd>
                </dl>

                <dl className='w-1/2 sm:w-1/4 md:flex-1 lg:w-auto'>
                  <dt className='text-base font-medium text-gray-500 dark:text-gray-400'>
                    Date:
                  </dt>
                  <dd className='mt-1.5 text-base font-semibold text-gray-900 dark:text-white'>
                    <time
                      pubdate='true'
                      dateTime='2022-03-12'
                      title='March 12th, 2022'
                    >
                      {new Date(completed.date)
                        .toLocaleString("en-US")
                        .slice(0, 9)}
                    </time>
                  </dd>
                </dl>

                <dl className='w-1/2 sm:w-1/5 md:flex-1 lg:w-auto'>
                  <dt className='text-base font-medium text-gray-500 dark:text-gray-400'>
                    Price:
                  </dt>
                  <dd className='mt-1.5 text-base font-semibold text-gray-900 dark:text-white'>
                    {formatter.format(completed.total)}
                  </dd>
                </dl>
                <dl className='w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto'>
                  <dt className='text-base font-medium text-gray-500 dark:text-gray-400'>
                    Status:
                  </dt>
                  <dd className='mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300'>
                    <svg
                      className='me-1 h-3 w-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 11.917 9.724 16.5 19 7.5'
                      ></path>
                    </svg>
                    Completed
                  </dd>
                </dl>

                {/*  */}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LatestOrders;
