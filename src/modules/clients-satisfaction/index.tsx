import React from 'react';
import {FaGlassMartiniAlt, FaTrophy} from 'react-icons/fa';
import {GiEternalLove, GiCartwheel} from 'react-icons/gi';
import {IoIosPeople} from 'react-icons/io';
import {BsHandThumbsUp, BsCarFrontFill} from 'react-icons/bs';

const ClientsSatisfaction = () => {
  return (
    <>
      <div className="flex flex-col my-20 mx-[400px] items-center justify-center">
        {/* heading */}
        <div className="flex text-center">
          <div className="flex flex-col items-center mb-20">
            <span className="text-2lg uppercase">
              OUR MISSION IS <span className="text-red-400">CLIENTS </span>
              SATISFACTION{' '}
            </span>
            <img
              src="/assets/images/images6.png"
              className="ml-20"
              width="80"
              height="80"
              alt="car-logo"
            />
            <div className="border-2 border-white  mx-96  items-center gap-2 text-black  flex text-center my-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <b>Akshy kumar </b>
              </span>
              <img
                src="/assets/images/images7.jpg"
                width="80"
                height="80"
                alt="avatar"
              />
              <span>C.E.O.& Co-Founder</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-4">
            <IoIosPeople size={50} color="#000000" />
            <div className="flex-col">
              <h1 className="text-red-400 text-2lg font-bold">753+</h1>
              <span>Dedicated Employees</span>
            </div>
          </div>
          <div className="flex gap-4">
            <BsHandThumbsUp size={50} color="#000000" />
            <div className="flex-col">
              <h1 className="text-red-400 text-2lg font-bold">9053+</h1>
              <span>Satistied Customers</span>{' '}
            </div>
          </div>
          <div className="flex gap-4">
            <BsCarFrontFill size={50} color="#000000" />
            <div className="flex-col">
              <h1 className="text-red-400 text-2lg font-bold">539+</h1>
              <span>100%Fit vehicles</span>
            </div>
          </div>
          <div className="flex gap-4">
            <FaTrophy size={50} color="#000000" />
            <div className="flex-col">
              <h1 className="text-red-400 text-2lg font-bold">111+</h1>
              <span>Int.Awards Achieved</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsSatisfaction;
