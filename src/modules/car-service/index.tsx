import React from 'react';
import {FaGlassMartiniAlt} from 'react-icons/fa';
import {GiEternalLove, GiCartwheel} from 'react-icons/gi';

const CarService = () => {
  return (
    <>
      <div className="flex flex-col my-20 items-center justify-center">
        {/* heading */}
        <div className="flex flex-col text-center mb-20">
          <span>The Biggest Online</span>
          <span className="text-2lg uppercase">
            Car <span className="text-red-400">Rental </span>Server{' '}
            <img
              src="/assets/images/images6.png"
              className="ml-20"
              width="80"
              height="80"
              alt="car-logo"
            />
          </span>
        </div>

        {/* cars */}
        <div className="flex ">
          <div className="flex flex-col bg-sky-blue p-10 items-center gap-2 text-white w-96 text-center">
            <FaGlassMartiniAlt size={40} color="#ffffff" />
            <span className="uppercase">Most Affordable</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <img src="/assets/images/images2.png" width="200" height="400" />
          </div>
          <div className="flex flex-col bg-orange-300 p-10  border-2 border-white -mt-4  items-center gap-2 text-white w-96 text-center">
            <GiEternalLove size={40} color="#ffffff" />
            <span className="uppercase">Most Affordable</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <img src="/assets/images/images1.jpeg" />
          </div>
          <div className="flex flex-col bg-green-200 p-10  border-2 border-white   items-center gap-2 text-white w-96 text-center">
            <GiCartwheel size={40} color="#ffffff" />
            <span className="uppercase">Most Affordable</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <img src="/assets/images/images4.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarService;
