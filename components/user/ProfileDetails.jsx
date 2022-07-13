import React from "react";

export default function ProfileDetails() {
  return (
    <div className="  flex flex-wrap items-center justify-center">
      <div className="container max-w-lg bg-zinc-50 rounded dark:bg-zinc-800 shadow-2xl shadow-black  transform duration-200 easy-in-out m-12">
        <div className="h-2/4 sm:h-64 overflow-hidden">
          <img
            className="w-full rounded-t"
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Photo by aldi sigun on Unsplash"
          />
        </div>
        <div className="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <img
              alt="Photo by aldi sigun on Unsplash"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
            />
          </span>
        </div>
        <div className="">
          <div className="px-7 mb-8">
            <h2 className="text-3xl font-bold text-orange-800 dark:text-gray-300">
              Beth J. Greene
            </h2>
            <p className="text-gray-400 mt-2 dark:text-gray-400">Illustrator</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores molestiae vitae odio non commodi itaque quisquam
              incidunt doloribus fugit nesciunt.
            </p>
            <div className="justify-center px-4 py-2 cursor-pointer bg-gradient-to-br from-pink-700 to-orange-400 hover:bg-gradient-to-bl max-w-min mx-auto mt-8 rounded-lg text-gray-300  dark:focus:ring-pink-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
              bethgreene@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
