import React from 'react';

const LatestNews = () => {
  return (
    <>
      <div className="flex flex-col   my-20">
        <div className="flex flex-col items-center gap-4">
          <h2 className="uppercase text-lg">Our blog</h2>
          <h1 className="uppercase text-4lg">
            The latest <span className="text-red-500 ">News</span>{' '}
          </h1>
          <img
            src="/assets/images/images6.png"
            className="ml-20"
            width="80"
            height="80"
            alt="car-logo"
          />
        </div>

        <div className="mx-[480px] grid grid-cols-3 gap-2">
          <div className="flex flex-col items-start bg-white rounded-md shadow-md p-4">
            <h4 className="uppercase absolute bg-black text-white p-2 rounded-sm mt-4 -ml-4">
              29 April
            </h4>
            <img
              src="/assets/images/images8.jpeg"
              width="300"
              height="250"
              className="rounded-md"
            />
            <h2 className="my-2 font-bold">Testing</h2>
            <span>testing2</span>
            <button className="uppercase text-red-400 underline">
              Read More
            </button>
          </div>
          <div className="flex flex-col items-start bg-white rounded-md shadow-md p-4">
            <h4 className="uppercase absolute bg-black text-white p-2 rounded-sm mt-4 -ml-4">
              29 April
            </h4>
            <img
              src="/assets/images/images8.jpeg"
              width="300"
              height="250"
              className="rounded-md"
            />
            <h2 className="my-2 font-bold">Testing</h2>
            <span>testing2</span>
            <button className="uppercase text-red-400 underline">
              Read More
            </button>
          </div>
          <div className="flex flex-col items-start bg-white rounded-md shadow-md p-4">
            <h4 className="uppercase absolute bg-black text-white p-2 rounded-sm mt-4 -ml-4">
              29 April
            </h4>
            <img
              src="/assets/images/images8.jpeg"
              width="300"
              height="250"
              className="rounded-md"
            />
            <h2 className="my-2 font-bold">Testing</h2>
            <span>testing2</span>
            <button className="uppercase text-red-400 underline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
