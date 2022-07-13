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
              src="https://images.unsplash.com/photo-1653669718797-5670d0b57ca2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
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
                <button
                  className="text-white bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => props.signOut()}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
