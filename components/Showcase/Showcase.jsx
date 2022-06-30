import React from "react";
import Image from "next/image";

import ImageCard from "./ImageCard";

export default function Showcase(props) {
  return (
    <div>
      {props.photographs ? (
        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
          {props.photographs.map((data, idx) => (
            <ImageCard key={idx} info={data} id={2} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
          <h1>No Photographs to show</h1>
        </div>
      )}
    </div>
  );
}
