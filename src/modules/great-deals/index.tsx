import React from 'react';

const Greatdeals = () => {
  return (
    <>
      <div className="flex bg-bg-image1 w-screen bg-no-repeat bg-100% items-center text-center text-white my-20">
        <div className="p-8">
          <div className="flex flex-col items-center gap-4">
            <h2 className="uppercase text-lg">BE WITH US</h2>
            <h1 className="uppercase text-4lg">
              WE OFFERS GREAT <span className="text-red-500 ">DEALS</span>{' '}
            </h1>
            <img
              src="/assets/images/images6.png"
              className="ml-20"
              width="80"
              height="80"
              alt="car-logo"
            />
            <p className="mx-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="uppercase bg-red-400 text-white p-4 rounded-md my-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greatdeals;
