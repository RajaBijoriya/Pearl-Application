import React from "react";
import { Button } from '@mantine/core';
const Work = () => {
  return (
    <div className="ml-12 mr-12 mt-12 mb-20">
      <p className="text-5xl font-semibold mt-18 w-1/2">Designing Success</p>
      <p className="text-[25px] mt-5 w-1/2">
        See how we've turned ideas into reality. Dive into the stories of
        <span className="text-neutral-400">
          {" "}
          successful product designs that make a difference.
        </span>
      </p>
      <div className="grid grid-cols-2 mt-20 gap-7 justify-center">
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img1.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Booking Corp.</p>
            <p className="text-[14px] font-semibold">
              Fintech Dello Banking App
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img2.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Dazzle Inc.</p>
            <p className="text-[14px] font-semibold">Dazzle © Branding</p>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img33.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Your Client Name.</p>
            <p className="text-[14px] font-semibold">Healthcare Mobile App</p>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img4.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Tech Bank Client</p>
            <p className="text-[14px] font-semibold">Technical Infographic</p>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img5.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Client Name</p>
            <p className="text-[14px] font-semibold">
              Extend & Support - App Plugin
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[600px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img1.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Booking Corp.</p>
            <p className="text-[14px] font-semibold">Fintech Dashboard</p>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full">
        <ul className="flex justify-around gap-20">
          <li className="text-[12px] w-[100px]">Our Story</li>
          <li className="w-[700px]">
            <p className="text-[30px]">
              Explore our journey and learn what sets us apart in 
              <span className="text-natural-400"> crafting
              impactful digital experiences.</span>
            </p>
          </li>
          <li><Button variant="outline" color="rgba(5, 5, 5, 1)"  radius="xl">About As</Button></li>
        </ul>
      </div>

    </div>
  );
};

export default Work;
