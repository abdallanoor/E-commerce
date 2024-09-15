export default function ContentLoading() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 overflow-hidden animate-pulse">
      <div className="w-full flex flex-col items-center gap-5 lg:basis-1/3">
        <div className="w-full md:w-72 h-96 bg-gray-200 rounded dark:bg-grayshade-100"></div>
        <div className="w-64 flex gap-3">
          <div className="w-20 h-20 bg-gray-200 rounded dark:bg-grayshade-100"></div>

          <div className="w-20 h-20 bg-gray-200 rounded dark:bg-grayshade-100"></div>

          <div className="w-20 h-20 bg-gray-200 rounded dark:bg-grayshade-100"></div>
        </div>
      </div>

      <div className="w-full lg:basis-4/6">
        <div className="w-full h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
        <div className="w-1/2 h-8 bg-gray-200 rounded dark:bg-grayshade-100"></div>
        <div className="w-24  h-8 bg-gray-200 rounded dark:bg-grayshade-100 my-4"></div>

        <div className="w-2/3 h-4 bg-gray-200 rounded dark:bg-grayshade-100 mb-2 mt-10"></div>
        <div className="w-full h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
        <div className="w-full h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-2"></div>
        <div className="w-1/2 h-8 bg-gray-200 rounded dark:bg-grayshade-100"></div>

        <div className="w-full md:w-44 h-8 bg-gray-200 rounded dark:bg-grayshade-100 mt-10"></div>
      </div>
    </div>
  );
}
