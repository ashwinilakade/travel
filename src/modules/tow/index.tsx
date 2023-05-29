import React from 'react';

const Tow = () => {
  return (
    <>
      <div className="grid grid-cols-2  mx-[400px] mt-40">
        <div>
          <h2 className="uppercase text-lg">Did you know?</h2>
          <h1 className="uppercase text-4lg">
            We'll let you <span className="text-red-500 ">tow</span>{' '}
          </h1>
          <p className="mr-40 my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="uppercase bg-red-400 text-white p-4 rounded-md my-4">
            Learn More
          </button>
        </div>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/3J0bds-1qHk"
        ></iframe>
      </div>
    </>
  );
};

export default Tow;
