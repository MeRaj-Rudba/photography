import React from "react";
import Image from "next/image";
export default function UserInfo() {
  return (
    <div className="flex items-center">
      <Image
        className="h-11 w-11 rounded-full"
        src="https://images.unsplash.com/profile-1656214358019-3746a602805a?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        height={36}
        width={36}
        alt="MeRaj Rudba"
      />
      <div className="ml-1.5 text-sm leading-tight">
        <span className="text-black dark:text-white font-bold block ">
          MeRaj Rudba
        </span>
        <span className="text-gray-500 dark:text-gray-400 font-normal block">
          @meraj_rudba
        </span>
      </div>
    </div>
  );
}
