import React from 'react';
import {BsCarFrontFill} from 'react-icons/bs';

const Home = () => {
  return (
    <div className="h-screen w-screen bg-bg-image bg-no-repeat bg-cover p-8">
      <section id="navbar">
        <div className="flex bg-white md:mx-96  items-center gap-4">
          <div className="flex items-center gap-2 md:mx-4">
            <BsCarFrontFill size={40} />
            <span className="uppercase text-green-400">Cars</span>
          </div>
          <div className="flex w-screen flex-col">
            <div className="flex w-full bg-black justify-between px-10 py-2  rounded-bl-full">
              <div className="flex gap-4 text-white">
                <span>(+91) 9988776655</span>
                <span>support@gmail.com</span>
              </div>
              <div>
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      Account{' '}
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      Eng{' '}
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      USD{' '}
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center py-2">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800   dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-red-700 bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    LISTING
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    RESERVATION
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    PAGES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    NEWS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent"
                  >
                    FEATURES
                  </a>
                </li>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Button
                </button>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="search">
        <div className="flex gird grid-cols-2 my-60">
          <div className="flex flex-col p-4 bg-grey w-fit md:mx-96  gap-4">
            <div className="flex p-3 bg-white rounded-sm gap-8">
              <span className="uppercase">Picking up</span>
              <span>|</span>
              <input
                type="text"
                id="first_name"
                className=" w-96 rounded-lg focus:ring-white focus:border-white block    dark:placeholder-gray-400 dark:text-white "
                placeholder="Zip, City, Airport or Address"
                required
              />
            </div>
            <div className="flex p-3 bg-white rounded-sm gap-8">
              <span className="uppercase">Droping Off</span>
              <span>|</span>
              <input
                type="text"
                id="first_name"
                className="text-gray-900  w-96 rounded-lg focus:ring-white focus:border-white block  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Zip, City, Airport or Address"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">Picking Date</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">Picking Time</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1 rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">RETURN DATE</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">RETURN TIME</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1 rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">DRIVER'AGE</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">RESIDENT</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1 rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Zip"
                  required
                />
              </div>
              <div className="flex w-full p-3 bg-white rounded-sm gap-4">
                <span className="uppercase">PROMO CODE</span>
                <span>|</span>
                <input
                  type="text"
                  id="first_name"
                  className="text-gray-900 resize-none flex-1 rounded-lg focus:ring-white focus:border-white block   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="(Optional)"
                  required
                />
              </div>
              <button className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border border-blue-300 rounded">
                SEARCH
              </button>
            </div>
          </div>
          <div className="my-32">
            <h1 className="font-bold text-5lg text-white">WE ARE WHEEL</h1>
            <h2 className="font-bold text-3lg text-white">
              {' '}
              SEARCH-HIRE-COPMPARE-SAVE
            </h2>

            <p className="font-bold text-2lg text-white">
              {' '}
              We help you car on rent 150 +contries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
