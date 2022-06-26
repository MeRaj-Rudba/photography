import React from "react";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function ImageCard(props) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "rudba",
    },
  });
  const myImage = cld.image(props.image.public_id);
  myImage.resize(fill().width(250).height(250));
  return (
    <div className="relative group flex justify-center">
      <div className="grid items-center">
        <AdvancedImage cldImg={myImage} className="group-hover:opacity-30" />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
          <div className="flex-row text-center">
            <p className="my-font">MeRaj Rudba</p>
          </div>
        </div>
      </div>
    </div>
  );
}
