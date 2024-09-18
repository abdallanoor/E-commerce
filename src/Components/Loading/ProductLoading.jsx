export default function ProductLoading() {
  return (
    <>
      <div className="md:p-4 lg:p-7 p-3 rounded-lg border border-gray-100  bg-white dark:border-neutral-800 dark:bg-black shadow-md w-full justify-center justify-items-center justify-self-center animate-fadeIns">
        <div className="w-full animate-pulse ">
          <div className="w-full h-64 mb-8 bg-gray-300 rounded-lg md:h-72 dark:bg-neutral-700"></div>

          <p className="w-3/5 h-3 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
          <p className="w-5/6 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
          <p className="w-20 h-8 my-7 bg-gray-200 rounded-2xl dark:bg-grayshade-100"></p>
          <div className="flex justify-between items-end">
            <div>
              <p className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
              <p className="w-24 h-3 mt-2 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
            </div>
            <p className="w-24 h-8 bg-gray-200 rounded-lg dark:bg-grayshade-100"></p>
          </div>
        </div>
      </div>
    </>
  );
}
