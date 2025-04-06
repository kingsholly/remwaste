import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import Tag from "../Elements/Tag";
import { cx } from "@/src/utils";

const BlogLayoutThree = ({ blog, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(blog.id);
    // console.log(blog);
  };

  return (
    <div
      onClick={handleClick} // Blog card click will trigger the selection
      className={`group flex flex-col items-center text-dark dark:text-light 
    border transition-all duration-300 p-6 rounded-xl cursor-pointer 
    transform hover:scale-105 ease-in-out
    ${
      isSelected
        ? "border-[#0037c1] dark:border-[#89aaff] border-2 shadow-lg bg-[#e6f0ff] dark:bg-[#1c2a49] bg-opacity-80"
        : "border-transparent hover:border-slate-300 dark:hover:border-slate-600 bg-transparent"
    }`}
    >
      <div className="relative w-full h-full mb-4">
        <div className="block h-full rounded-xl overflow-hidden">
          <Image
            src={blog.image.src}
            placeholder="blur"
            blurDataURL={blog.image.blurDataURL}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <span className="absolute top-3 right-3 bg-[#0037c1] dark:bg-[#0037c1] text-white font-semibold text-xs sm:text-sm px-2 py-2 rounded shadow-md">
          {blog.title2}
        </span>
      </div>

      <div className="flex flex-col w-full mt-6">
        <span className="capitalize  text-gray dark:text-light/50 font-semibold text-sm sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mb-2">
          {blog.tags[0]}
        </span>

        <div className="inline-block my-2">
          <h2 className="font-semibold capitalize text-lg sm:text-xl">
            <span>{blog.title}</span>
          </h2>
        </div>

        <div className="inline-block my-2">
          <h2 className="font-semibold text-3xl sm:text-3xl">
            <span
              className={`${
                isSelected
                  ? "text-[#0037c1] dark:text-white "
                  : "text:black dark:text-white"
              } bg-gradient-to-r from-[#0037c1] to-[#0037c1] bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500`}
            >
              £{blog.price_before_vat}
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400 font-normal">
                per week
              </span>
            </span>
          </h2>
        </div>

        {/* Tag Button */}
        <div className="w-56 mt-6">
          <Tag
            name={isSelected ? "Selected" : "Select This Skip"}
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from bubbling up to parent div
              handleClick(); // Trigger handleClick directly
            }}
            className={cx(
              isSelected
                ? "bg-[#3b82f6] bg-opacity-90 text-white shadow-md dark:bg-[#2563eb] dark:text-white"
                : `
      bg-[#374151] text-gray-800 
      hover:bg-[#dbeafe] hover:text-[#1e3a8a] 
      dark:bg-[#374151] dark:text-gray-100 
      dark:hover:bg-[#3b82f6] dark:hover:text-white 
      shadow-sm
    `,
              "px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
