import React from "react";
import moment from "moment";
import { buildUrl } from "cloudinary-build-url";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import UserInfo from "../user/UserInfo";
import LoveReact from "../Interactivity/LoveReact";
import FeaturedReact from "../Interactivity/FeaturedReact";

export default function ImageDetails(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "rudba",
    },
  });
  const myImage = cld.image(props.info.image.public_id);

  return (
    <div className="bg-zinc-50  dark:bg-zinc-900  shadow-2xl shadow-black rounded  pb-8 my-10 ">
      <div className="relative group flex justify-center cursor-pointer">
        <AdvancedImage
          cldImg={myImage}
          className="group-hover:opacity-40 max-h-screen"
        />
      </div>
      <div className="px-8 pt-6">
        <p className="">
          <span>
            <LoveReact id={props.info._id} likes={props.info.likes} />
            <FeaturedReact
              id={props.info._id}
              isFeatured={props.info.isFeatured}
            />
          </span>
        </p>

        <p className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400">
          Uploaded {moment(props.info.date).fromNow()}
        </p>

        <div className="cursor-pointer">
          <span className=" text-gray-800 text-xs font-medium inline-flex items-center rounded mr-2  dark:text-zinc-50 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p>{props.info.location}</p>
          </span>
        </div>

        <div className="my-2 ">
          {props.info.categories.map((category, idx) => (
            <span
              key={idx}
              className="bg-zinc-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-zinc-700 dark:text-zinc-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              {category}
            </span>
          ))}
        </div>
        <p>
          <small>
            Captured by{" "}
            <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400">
              {props.info.photographer}
            </span>{" "}
            with{" "}
            <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-400">
              {props.info.device}
            </span>
          </small>
        </p>
        <p className="mt-10">
          <span className="italic "> {props.info.description}</span>
        </p>
      </div>
    </div>
  );
}
