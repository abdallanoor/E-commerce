export default function OrderLoading() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col items-center">
        <div className="w-2/3 sm:w-1/2 h-8 bg-gray-200 rounded dark:bg-grayshade-100 mb-4"></div>
        <div className="w-1/3 h-3 bg-gray-200 rounded dark:bg-grayshade-100 mb-10"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="w-44 h-6 bg-gray-200 rounded dark:bg-grayshade-100 mb-3"></div>
        <div className="w-full max-sm:h-60 h-24 bg-gray-200 rounded dark:bg-grayshade-100 mb-10"></div>
        <div className="w-44 h-6 bg-gray-200 rounded dark:bg-grayshade-100 mb-3"></div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-64 h-14 bg-gray-200 rounded dark:bg-grayshade-100 mb-3"></div>
          <div className="w-full lg:w-64 h-14 bg-gray-200 rounded dark:bg-grayshade-100 mb-3"></div>
          <div className="w-full lg:w-64 h-14 bg-gray-200 rounded dark:bg-grayshade-100 mb-3"></div>
        </div>
        <div className="w-32 h-10 bg-gray-200 rounded dark:bg-grayshade-100 mt-7 mb-3"></div>
      </div>
    </div>
  );
}
