import React from "react";
import Image from "next/image";

import ImageCard from "./ImageCard";

export default function Showcase(props) {
  const DUMMY_DATA = [
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/rkezckkxs4fh6rgudsbt",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/rkezckkxs4fh6rgudsbt.jpg",
    },
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/ogkjyyoyoouxzftqtsdi",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/ogkjyyoyoouxzftqtsdi.jpg",
    },
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/he1k1s2lz1amuckmnsq3",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/he1k1s2lz1amuckmnsq3.jpg",
    },
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/rkezckkxs4fh6rgudsbt",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/rkezckkxs4fh6rgudsbt.jpg",
    },
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/ogkjyyoyoouxzftqtsdi",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/ogkjyyoyoouxzftqtsdi.jpg",
    },
    {
      asset_id: "8dcaa9d523db7ed04d7435ffabff044d",
      public_id: "My Uploads/he1k1s2lz1amuckmnsq3",
      version: 1656235712,
      version_id: "57229deaf4c82582d0c7ef37ac0f40fd",
      signature: "eb0c9e7a21b0af1752089769df178e4ff7631652",
      width: 6000,
      height: 4000,
      format: "jpg",
      resource_type: "image",
      created_at: "2022-06-26T09:28:32Z",
      secure_url:
        "https://res.cloudinary.com/rudba/image/upload/v1656236893/My%20Uploads/he1k1s2lz1amuckmnsq3.jpg",
    },
  ];

  return (
    <div>
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
        {DUMMY_DATA.map((data, idx) => (
          <ImageCard key={idx} image={data} />
        ))}
      </div>
    </div>
  );
}
