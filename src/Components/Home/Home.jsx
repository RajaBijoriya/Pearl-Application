import React from "react";
import { Text, Divider } from '@mantine/core';
import { Button } from "@mantine/core";

const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  }
  return (
    <div className=" mr-12 ml-12 mt-12">
      <div className="flex flex-col gap-15 mb-20">
        <p className="text-[12px]">Branding · Product Design</p>
        <p className="text-5xl max-w-[700px]">
          Discover the essence of Pearl, a free Framer template.
          <span className="text-neutral-400">
            Let's shape your brand into a masterpiece together.
          </span>
        </p>
        <div className="mb-15">
          <Button
            variant="filled"
            color="rgba(5, 5, 5, 1)"
            size="xs"
            radius="lg">
            Get for free
          </Button>
        </div>
      </div>
      <div>
        <div className="mb-10">
          <img
            className="w-full h-[600px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
            src="./public/img1.png"
            alt=""
          />
          <div className="mt-5">
            <p className="text-[12px] text-gray-600">Booking Corp.</p>
            <p className="text-[14px] font-semibold">
              Fintech Dello Banking App
            </p>
          </div>
          <div className="w-full grid grid-cols-2 mt-10 gap-7">
            <div>
              <img
                className="w-[700px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
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
                className="w-[700px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
                src="./public/img33.png"
                alt=""
              />
              <div className="mt-5">
                <p className="text-[12px] text-gray-600">Your Client Name.</p>
                <p className="text-[14px] font-semibold">
                  Healthcare Mobile App
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-[700px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
                src="./public/img4.png"
                alt=""
              />
              <div className="mt-5">
                <p className="text-[12px] text-gray-600">Tech Bank Client</p>
                <p className="text-[14px] font-semibold">
                  Technical Infographic
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-[700px] h-[300px] rounded-4xl hover:scale-105 transition duration-300 ease-in-out"
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
          </div>
        </div>
      </div>
      <div className="mt-20 w-full mb-20">
        <ul className="flex justify-around gap-20">
          <li className="text-[12px] w-[100px]">Designing Success</li>
          <li className="w-[700px]">
            <p className="text-[30px]">
              See how we've turned ideas into reality. Dive into the stories of
              <span className="text-neutral-400">
                {" "}
                 crafting impactful digital experiences.
              </span>
            </p>
          </li>
          <li>
            <Button variant="outline" color="rgba(5, 5, 5, 1)" radius="xl">
              About As
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-15 mb-20 mt-20">
        <p className="text-[12px]">Services</p>
        <div className="mt-15">
          <ul className="text-[24px]">
            <li className="cursor-pointer" onClick={handleClick()} >Branding</li>
            <ul className="flex flex-col mt-5  mb-5 gap-2 text-[14px]">
              <li>Logo Design</li>
              <li>Brand Guidelines</li>
              <li>Collateral Design </li>
              <li>Rebranding Services</li>
            </ul>
             <Divider my="md" />

            <li>UX/UI Designs</li>
           <ul className="flex flex-col mt-5  mb-5 gap-2 text-[14px]">
              <li>User Research and Analysis</li>
              <li>Wireframing and Prototyping</li>
              <li>User Interface Design </li>
              <li>User Experience Testing</li>
              <li>Responsive Design Solutions</li>
            </ul>
              <Divider my="md" />
            <li>Motion & Animation</li>
             <ul className="flex flex-col mt-5  mb-5 gap-2 text-[14px]">
              <li>Motion Graphics Design</li>
              <li>Animated Explainer Videos</li>
              <li>Interactive Presentations </li>
            
            </ul>
              <Divider my="md" />
            <li>Mobile</li>
             <ul className="flex flex-col mt-5  mb-5 gap-2 text-[14px]">
              <li>iOS App Development</li>
              <li>Android App Development</li>
              <li>App Prototyping and Testing </li>
              <li>App Maintenance and Updates</li>
            </ul>
              <Divider my="md" />
          </ul>
        </div>
      </div>
      <div className="mt-20 w-full mb-20">
        <ul className="flex justify-around gap-20">
          <li className="text-[12px] w-[100px]">Our Story</li>
          <li className="w-[700px]">
            <p className="text-[30px]">
              Explore our journey and learn what sets us apart in
              <span className="text-neutral-400">
                {" "}
                 crafting impactful digital experiences.
              </span>
            </p>
          </li>
          <li>
            <Button variant="outline" color="rgba(5, 5, 5, 1)" radius="xl">
              About As
            </Button>
          </li>
        </ul>
      </div>
      <div className="mb-40 mt-40">
        <img src="./public/lastone.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
