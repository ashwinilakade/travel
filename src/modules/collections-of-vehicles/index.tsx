import React from 'react';
import {BsFillBagFill, BsPeopleFill, BsStopwatchFill} from 'react-icons/bs';
const Collectionsofvehicles = () => {
  return (
    <>
      <div className="flex flex-col my-20 items-center justify-center">
        {/* heading */}
        <div className="flex flex-col text-center mb-20">
          <span>WE HAVE A GREAT</span>
          <span className="text-2lg uppercase">
            Collections of <span className="text-red-400">Vehicles </span>{' '}
            <img src="/assets/images/images6.png " width="100" height="200" />
          </span>
        </div>
        <div className="flex ">
          <img src="/assets/images/images8.jpeg" width="300" height="250" />

          <img src="/assets/images/images14.jpeg" width="300" height="250" />

          <img src="/assets/images/images13.jpeg" width="300 " height="250" />
          <img src="/assets/images/images8.jpeg" width="300 " height="250" />
          <img src="/assets/images/images16.jpg" width="300 " height="250" />
        </div>

        <div className="grid grid-cols-2 mt-20 items-center">
          <div className="flex flex-col">
            <span>
              <b>2016 Nissan Juke</b>
            </span>
            <p>Luxury sports car</p>
            <span className="text-red-400">
              $79 <span className="text-gray-400">/Day</span>{' '}
            </span>{' '}
            <p className="text-gray-400">
              Messages by Google is the official Google app for messaging over
              Rich Communication
            </p>
            <h1 className="text-gray-400">
              Messages by Google is the official Google app for messaging{' '}
            </h1>
            <div className="flex gap-4 mt-8">
              <div className="flex gap-4">
                <BsFillBagFill size={30} color="#000000" />
                <div className="flex-col">
                  <span>
                    <b>2 BAGS</b>
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <BsPeopleFill size={30} color="#000000" />
                <div className="flex-col">
                  <span>
                    <b>2 PASSENGERS</b>
                  </span>{' '}
                </div>
              </div>
              <div className="flex gap-4">
                <BsStopwatchFill size={30} color="#000000" />
                <div className="flex-col">
                  <span>
                    <b>5.6/100MPG</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                VIEW ALL RENTAL CAR
              </button>
            </div>
          </div>

          <div className="ml-4">
            <img
              src="/assets/images/carlogo-bg-tran.png"
              width="500"
              height="250"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collectionsofvehicles;
