import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import ProfileDetails from "./ProfileDetails";
import Image from "next/image";

export default function ProfileCard(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "rudba",
    },
  });
  const myImage = cld.image(props.user.displayPicture.public_id);
  myImage.resize(fill().width(250).height(250));

  return (
    <div>
      {/* <AdvancedImage cldImg={myImage} className="group-hover:opacity-40" /> */}
      <div className="  flex flex-wrap items-center justify-center">
        <div className="container max-w-lg bg-zinc-50 rounded dark:bg-zinc-800 shadow-2xl shadow-black  transform duration-200 easy-in-out m-12">
          <div className="h-2/4 sm:h-64 overflow-hidden">
            <img
              className="w-full rounded-t"
              src="https://images.unsplash.com/photo-1576502202167-791eca35a78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
              alt="Photo by aldi sigun on Unsplash"
            />
          </div>
          <div className="flex justify-start px-5 -mt-12 mb-5">
            <span clspanss="block relative h-32 w-32">
              <AdvancedImage
                cldImg={myImage}
                className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
              />
            </span>
          </div>
          <div className="">
            <div className="px-7 mb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-pink-700 to-orange-400 ">
                {props.user.name}
              </h2>
              <small className="text-zinc-600 mt-2 font-bold  uppercase ">
                {props.user.role}
              </small>

              {/* <p className="mt-2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores molestiae vitae odio non commodi itaque quisquam
                incidunt doloribus fugit nesciunt.
              </p> */}
              <div className="text-center mt-8 cursor-pointer font-medium  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400 ">
                {props.user.email}
              </div>
              <div className="w-full flex place-content-center mt-8 mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer text-orange-600 hover:text-pink-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={() => props.signOut()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
