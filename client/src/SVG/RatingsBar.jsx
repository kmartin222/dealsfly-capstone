import Star from "./Star";

const RatingsBar = () => {
  return (
    <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
      <div className="flex items-center gap-2">
        <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
          5
        </p>
        <Star />
        <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full bg-yellow-300"
            style={{ width: "20%" }}
          ></div>
        </div>
        <a
          href="#"
          className="w-8 shrink-0 text-right text-sm font-medium leading-none text-gray-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
        >
          239 <span className="hidden sm:inline">reviews</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
          4
        </p>
        <Star />
        <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full bg-yellow-300"
            style={{ width: "60%" }}
          ></div>
        </div>
        <a
          href="#"
          className="w-8 shrink-0 text-right text-sm font-medium leading-none text-gray-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
        >
          432 <span className="hidden sm:inline">reviews</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
          3
        </p>
        <Star />
        <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full bg-yellow-300"
            style={{ width: "15%" }}
          ></div>
        </div>
        <a
          href="#"
          className="w-8 shrink-0 text-right text-sm font-medium leading-none text-gray-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
        >
          53 <span className="hidden sm:inline">reviews</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
          2
        </p>
        <Star />
        <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full bg-yellow-300"
            style={{ width: "15%" }}
          ></div>
        </div>
        <a
          href="#"
          className="w-8 shrink-0 text-right text-sm font-medium leading-none text-gray-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
        >
          32 <span className="hidden sm:inline">reviews</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
          1
        </p>
        <Star />
        <div className="h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-1.5 rounded-full bg-yellow-300"
            style={{ width: "0%" }}
          ></div>
        </div>
        <a
          href="#"
          className="w-8 shrink-0 text-right text-sm font-medium leading-none text-gray-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
        >
          13 <span className="hidden sm:inline">reviews</span>
        </a>
      </div>
    </div>
  );
};

export default RatingsBar;
