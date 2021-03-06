import React from "react"
import { NextPage } from "next"
import Router from "next/router"
import withLayout from "../../hocs/withLayout"
import utilities from "../../utilities"

import Button from "../Elements/Button"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="text-center">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Full Stack Track
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Start by entering a tracking number.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Carrier
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Tracking #
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="mb-10 flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Submit
                </button>
                <a
                  role="button"
                  href="/contact"
                  className="mt-10 mb-10 mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Contact Us
                </a>
                <br />
                <br />
                <a
                  role="button"
                  href="/pricing"
                  className="mt-10 mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withLayout(Home)
